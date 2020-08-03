import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import CardsLoopReviews from '../components/cards/Cards-loop-reviews'
import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Inbound Latino - Sitio web de Jose Sotelo" description="Conoce mi trabajo y descubre las mejores reseñas de SaaS" />

      <Hero title='Reseñas de Aplicaciones y descuentos increíbles' subtitle='Las últimas reseñas.' />

      <div className="py-12 lg:py-10">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <CardsLoopReviews items={data.portfolio.nodes} />
        ) : (
          <div className="container">No encontramos artículos.</div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ReviewsQuery {
    portfolio: allContentfulReviews {
      nodes {
        ...ReviewsCard
      }
    }
  }
`
