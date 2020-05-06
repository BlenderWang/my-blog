import React from "react";
import Articles from "../components/Articles";
import Query from "../components/Query";
import ARTICLE_QUERY from "../queries/articles/articles";

const Home = () => {
    return (
        <main className="container">
            <h1>Shirley's Blog</h1>
            <Query query={ARTICLE_QUERY}>
                {({ data: { articles } }) => {
                    return <Articles articles={articles} />;
                }}
            </Query>
        </main>
    );
};

export default Home;
