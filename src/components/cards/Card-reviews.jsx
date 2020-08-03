import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ScoreIcons from '../scoreIcons'

const CardReviews = props => {
  const { name, slug, summary, thumbnail, score } = props

  return (
    <div className="h-full shadow-sm rounded-md overflow-hidden group border border-gray-800">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} />
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="sm:text-lg font-semibold">{name}</h3>
          <p className="text-sm mb-2 sm:text-base text-gray-500">{summary}</p>
          <ScoreIcons score={score} />
        </div>
      </Link>
    </div>
  )
}

CardReviews.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default CardReviews

export const query = graphql`
  fragment ReviewsCard on ContentfulReviews {
    id
    name
    slug
    score
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
