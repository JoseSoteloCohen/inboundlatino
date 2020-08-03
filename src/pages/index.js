import { graphql } from "gatsby"
import React from "react"
import CardsLoopPortfolio from "../components/cards/Cards-loop-portfolio"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import CardsLoopPlugins from '../components/cards/Cards-loop-plugins'
import CardsLoopReviews from '../components/cards/Cards-loop-reviews'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Inbound Latino - Sitio web de Jose Sotelo" description="Conoce mi trabajo y descubre las mejores reseñas de SaaS" />

      <Hero title='Hola, mi nombre es José Sotelo 👋' subtitle='¡Bienvenido a mi sitio!' />

      <div className="container mt-20">
        <h3 className="text-2xl sm:text-4xl font-extrabold">Open Source</h3>
      </div>
      <div className="py-12 lg:py-16">
        {data.plugins && data.plugins.nodes.length > 0 ? (
          <CardsLoopPlugins items={data.plugins.nodes} />
        ) : (
          <div className="container">No encontramos plugins.</div>
        )}
      </div>

      <div className="container mt-10">
        <h3 className="text-2xl sm:text-4xl font-extrabold">Las últimas reseñas</h3>
      </div>
      <div className="py-12 lg:py-16">
        {data.reviews && data.reviews.nodes.length > 0 ? (
          <CardsLoopReviews items={data.reviews.nodes} />
        ) : (
          <div className="container">No encontramos reseñas.</div>
        )}
      </div>

      <div className="container mt-10">
        <h3 className="text-2xl sm:text-4xl font-extrabold">Lo último del blog</h3>
      </div>
      <div className="py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <CardsLoopPortfolio items={data.portfolio.nodes} />
        ) : (
          <div className="container">No encontramos artículos.</div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPosts {
      nodes {
        ...PortfolioCard
      }
    }
    plugins: allContentfulPlugins {
      nodes {
        ...PluginCard
      }
    }
    reviews: allContentfulReviews {
      nodes {
        ...ReviewsCard
      }
    }
  }
`
