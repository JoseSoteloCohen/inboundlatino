import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const CardPortfolio = props => {
  const { name, slug, summary, thumbnail } = props

  return (
    <div className="h-full shadow-sm rounded-md overflow-hidden group border border-gray-800">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg font-semibold">{name}</h1>
          <p className="text-sm sm:text-base text-gray-500">{summary}</p>
        </div>
      </Link>
    </div>
  )
}

CardPortfolio.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default CardPortfolio

export const query = graphql`
  fragment PortfolioCard on ContentfulPosts {
    id
    name
    slug
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    summary
  }
`
