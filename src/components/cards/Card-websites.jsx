import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const WebsiteCard = props => {
  const { name, url, thumbnail } = props

  return (
    <div className="h-full shadow-sm rounded-md overflow-hidden group border border-gray-800">
      <a href={`${url}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg font-semibold">{name}</h1>
        </div>
      </a>
    </div>
  )
}

WebsiteCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default WebsiteCard

export const query = graphql`
  fragment WebsiteCard on ContentfulWebsites {
    id
    name
    url
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
