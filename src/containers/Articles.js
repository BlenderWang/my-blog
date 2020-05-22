import React from "react";
import Articles from "../components/Articles";
import Query from "../components/Query";
import ARTICLE_QUERY from "../queries/articles/articles";
import { Spring } from "react-spring/renderprops";

const Home = () => {
    return (
        <main className="container container-home">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 200, duration: 1000 }}
            >
                {(opacity) => <h1 style={opacity}>Shirley's Blog</h1>}
            </Spring>
            <Query query={ARTICLE_QUERY}>
                {({ data: { articles } }) => {
                    return <Articles articles={articles} />;
                }}
            </Query>
        </main>
    );
};

export default Home;
