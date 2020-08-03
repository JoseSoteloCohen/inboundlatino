import { graphql } from "gatsby"
import React from "react"
import CardsLoopPortfolio from "../components/cards/Cards-loop-portfolio"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Blog de marketing digital y desarrollo web" description="Conoce más sobre el mundo digital con tutoriales paso-a-paso que te ayudaran a resolver cualquier duda." />

      <Hero title='Desarrollo web y marketing digital' subtitle='Lo último del blog.' />

      <div className="py-12 lg:py-10">
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
  query BlogQuery {
    portfolio: allContentfulPosts {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
