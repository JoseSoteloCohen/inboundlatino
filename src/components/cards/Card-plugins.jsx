import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaGithub, FaWordpress } from 'react-icons/fa'

const PluginCard = props => {
  const { name, url, childContentfulPluginsExcerptTextNode, thumbnail, githubUrl } = props

  return (
    <div className="h-full shadow-sm rounded-md overflow-hidden group border border-gray-800">
      <a href={url}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} />
        </div>
      </a>
      <div className="p-4 sm:p-5">
        <h1 className="sm:text-lg font-semibold">{name}</h1>
        <p className="text-sm sm:text-base text-gray-500">{childContentfulPluginsExcerptTextNode.excerpt}</p>
        <div className="flex flex-row border-t mt-3 pt-3 border-gray-800">
          <a href={url}
             className="text-2xl"
             target="_blank"
             rel="noreferrer noopener nofollow"
          >
            <FaWordpress/>
          </a>
          <a className="ml-5 text-2xl"
             href={githubUrl}
             target="_blank"
             rel="noreferrer noopener nofollow"
          >
            <FaGithub/>
          </a>
        </div>
      </div>
    </div>
  )
}

PluginCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  githuburl: PropTypes.string.isRequired,
  childContentfulPluginsExcerptTextNode: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default PluginCard

export const query = graphql`
  fragment PluginCard on ContentfulPlugins {
    id
    name
    url
    githubUrl
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    childContentfulPluginsExcerptTextNode {
      excerpt
    }
  }
`
