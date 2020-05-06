import React from "react";
import { useParams } from "react-router";

import Query from "../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../queries/article/article";

const Article = () => {
    let { id } = useParams();

    return (
        <Query query={ARTICLE_QUERY} id={id}>
            {({ data: { article } }) => {
                const imageUrl =
                    process.env.NODE_ENV !== "development"
                        ? article.image.url
                        : process.env.REACT_APP_BACKEND_URL + article.image.url;

                return (
                    <div>
                        <div
                            className="banner"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                        >
                            <h1>{article.title}</h1>
                        </div>

                        <section className="article__section">
                            <div className="container">
                                <ReactMarkdown source={article.content} />

                                <p>
                                    <Moment format="MMM Do YYYY">
                                        {article.published_at}
                                    </Moment>
                                </p>
                            </div>
                        </section>
                    </div>
                );
            }}
        </Query>
    );
};

export default Article;
