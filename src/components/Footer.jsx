import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaTwitter, FaGithub, FaWordpress, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            linkedIn
            wordpress
            github
            twitter
          }
        }
      }
    }
  `)

  return (

    <div className="container mt-40 py-12 md:flex md:items-center md:justify-between">
      <ul className="flex justify-center md:order-2">
        <FooterLink href={links.wordpress} icon={FaWordpress} label="WordPress" />
        <FooterLink href={links.github} icon={FaGithub} label="Github" />
        <FooterLink
          href={links.linkedIn}
          icon={FaLinkedin}
          label="LinkedIn"
        />
        <FooterLink
          href={links.twitter}
          icon={FaTwitter}
          label="Twitter"
        />
      </ul>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          &copy; 2020 Inbound Latino. All rights reserved.
        </p>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer
