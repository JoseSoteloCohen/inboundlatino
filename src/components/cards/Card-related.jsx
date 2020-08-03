import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const CardRelated = props => {
  const { name, slug, summary } = props

  return (
    <div className="h-full shadow-sm rounded-md overflow-hidden group border border-gray-800">
      <Link to={`/${slug}`}>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg font-semibold">{name}</h1>
          <p className="text-sm sm:text-base text-gray-500">{summary}</p>
        </div>
      </Link>
    </div>
  )
}

CardRelated.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default CardRelated

export const query = graphql`
  fragment RelatedCard on ContentfulPosts {
    id
    name
    slug
    summary
  }
`
