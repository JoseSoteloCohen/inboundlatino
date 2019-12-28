import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Helmet from "react-helmet";
import pic11 from "../assets/images/pic11.jpg";

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                author
                excerpt
                image {
                    publicURL
                    childImageSharp {
                        fluid(webpQuality: 70, maxWidth: 1000) {
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
                <span className="image main"><img srcSet={post.frontmatter.image.childImageSharp.fluid.srcSetWebp} alt="" /></span>
            </div>
        </section>
        <article id="posts">
            <MDXRenderer>{post.body}</MDXRenderer>
            <Link to="/blog">&larr; back to all posts</Link>
        </article>
    </Layout>
);

export default PostTemplate;
