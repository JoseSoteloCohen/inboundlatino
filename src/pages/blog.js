import React from "react"
import usePosts from "../hooks/use-posts";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import BannerLanding from "../components/BannerLanding";
import Helmet from "react-helmet";

export default () => {
    const posts = usePosts();
    return (
        <>
            <Layout>
                <Helmet>
                    <title>últimos artículos sobre Marketing Digital | Inbound Latino</title>
                    <meta name="description" content="Landing Page" />
                </Helmet>
                <BannerLanding title={"Lo último en mi blog"} description={"Todo sobre marketing digital y desarrollo web"}/>
                <div>
                    <div className="inner post-feed">
                        {posts.map(post => (
                            <PostPreview key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};