import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx (filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        nodes {
          frontmatter {
            title
            slug
          }
          excerpt
          id
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
    id: post.id,
  }));
};

export default usePosts;
