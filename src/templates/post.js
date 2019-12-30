import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Helmet from "react-helmet";

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                excerpt
                image {
                    publicURL
                    childImageSharp {
                        fluid(webpQuality: 100, maxWidth: 1400) {
                            srcSetWebp
                        }
                    }
                }
            }
            body
        }
    }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <Helmet>
            <title>{post.frontmatter.title}</title>
            <meta name="description" content={post.frontmatter.excerpt} />
        </Helmet>
        <section id="hero">
            <div className="inner">
                <header className="major">
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.excerpt}</p>
                </header>
                <span className="image main"><img id="post-image" srcSet={post.frontmatter.image.childImageSharp.fluid.srcSetWebp} alt={post.frontmatter.title} /></span>
            </div>
        </section>
        <article id="posts">
            <MDXRenderer>{post.body}</MDXRenderer>
            <Link to="/blog">&larr; back to all posts</Link>
        </article>
    </Layout>
);

export default PostTemplate;
