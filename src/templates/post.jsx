import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { getFluidGatsbyImage } from '../getFluidGatsbyImage'
import Img from "gatsby-image"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CardsLoopPortfolio from '../components/cards/Cards-loop-portfolio'
import Newsletter from '../components/Newsletter'
import HyvorTalk from 'hyvor-talk-react'


export default props => {
  const {
    name,
    related,
    summary,
    thumbnail,
    content
  } = props.data.item;

  const Bold = ({ children }) => <strong>{children}</strong>;

  const Underline = ({ children }) => <u className="underline-line">{children}</u>;

  const Text = ({ children }) => <p className="text-xl text-gray-200 leading-loose mt-5">{children}</p>;

  const H2 = ({ children }) => <h2 className="text-2xl sm:text-3xl my-8 text-gray-500">{children}</h2>;

  const H3 = ({ children }) => <h3 className="text-xl sm:text-2xl my-8 text-gray-500">{children}</h3>;

  const H4 = ({ children }) => <h4 className="text-lg sm:text-xl my-8 text-gray-500">{children}</h4>;

  const H5 = ({ children }) =>
    <div className="rounded-md bg-red-300 p-4 my-12 shadow-red">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-red-800">
            CUIDADO
          </h3>
          <div className="mt-2 text-sm leading-5 text-red-700">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  ;

  const H6 = ({ children }) =>
    <div className="rounded-md bg-blue-300 p-4 my-12 shadow-blue">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-blue-800">
            Información Importante
          </h3>
          <div className="mt-2 text-sm leading-5 text-blue-700">
            <p>
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  ;

  const Quote = ({ children }) =>
    <div className="relative mt-32 lg:ml-10">
      <svg
        className="absolute h-40  top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
        stroke="currentColor" fill="none" viewBox="0 0 144 144">
        <path stroke-width="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"/>
      </svg>
      <blockquote className="relative">
        <div className="text-2xl leading-9 font-medium text-gray-900">
          <p>
            { children }
          </p>
        </div>
      </blockquote>
    </div>
  ;

  //const Anchor = ({ children }) => <a className="underline-line" href={}>{children}</a>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
      [MARKS.CODE]: code,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
      //[BLOCKS.HYPERLINK]: (node, children) => <Anchor>{children}</Anchor>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {

        if (node.data.target.sys.type === 'Asset') {

          const image = {
            file: node.data.target.fields.file['en-US'],
          }

          const fluidProps = getFluidGatsbyImage(image, {})
          return <Img classname="my-8" fluid={fluidProps} />
        }
      },
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  function code(text) {
    text.shift(); // for empty
    const language = text.shift();

    const value =
      text.reduce((acc, cur) => {
        if (typeof cur !== "string" && cur.type === "br") {
          return acc + "\n";
        }

        return acc + cur;
    }, "");

    return (
      <div className="my-8 shadow-dark rounded-md">
        <SyntaxHighlighter language={language} style={atomDark}>
          {value}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.localFile.publicURL}
      />
      <div className="py-12 lg:py-16">
        <div className="container blog-post">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h1 className="text-3xl sm:text-5xl font-extrabold sm:text-4xl mb-1">
                {name}
              </h1>
              <h2 className="text-xl leading-tight font-semibold tracking-tight text-gray-500 sm:text-2xl">
                {summary}
              </h2>
            </div>
            <article className="mt-20 post-content container">{documentToReactComponents(content.json, options)}</article>
          </div>
        </div>
      </div>
      <Newsletter title="¿Quieres recibir lo último?" subtitle="¡Subscribete a mi newsletter semanal!" buttonCTA="Notificame" list="146455"/>
      <div className="container">
        <HyvorTalk.Embed websiteId={process.env.GATSBY_HYVOR_SITE_TOKEN} />
      </div>

      {related && (
          <div className="container mt-20">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-white mb-8">
              También te puede gustar
            </h2>
          <CardsLoopPortfolio items={related}  />
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostsItemQUery($slug: String!) {
    item: contentfulPosts(slug: { eq: $slug }) {
      name
      content {
        json
      }
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
