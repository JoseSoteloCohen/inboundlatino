import { graphql, useStaticQuery } from 'gatsby';

const Commits = () => {
  const data = useStaticQuery(graphql`
    query {
        allGithubHistory(limit: 12, sort: {fields: pushedDate, order: DESC}) {
            edges {
                node {
                    repository {
                        name
                    }
                    commitUrl
                    messageHeadline
                    messageBody
                    pushedDate(fromNow: true, locale: "es")
                }
            }
        }
    }
  `);

  return data.allGithubHistory.edges.map(commit => ({
    name: commit.node.repository.name,
    title: commit.node.messageHeadline,
    message: commit.node.messageBody,
    date: commit.node.pushedDate,
    url: commit.node.commitUrl,
  }));
};

export default Commits;
