import React from "react"
import Commits from '../hooks/all-commits'
import CommitFeed from '../components/commit-feed';
import Layout from "../components/layout";
import BannerLanding from "../components/BannerLanding";
import Helmet from "react-helmet";

export default () => {
  const commits = Commits();
  return (
    <>
      <Layout>
        <Helmet>
          <title>últimos artículos sobre Marketing Digital | Inbound Latino</title>
          <meta name="description" content="Mis últimos push a los repos de mis plugins de WordPress" />
        </Helmet>
        <BannerLanding title={"Mi actividad en Github 🖖"} description={"Mis últimos push a los repos de mis plugins de WordPress"} style={"style4"}/>
        <div>
          <div className="inner post-feed">
            {commits.map(commit => (
              <CommitFeed commit={commit} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};