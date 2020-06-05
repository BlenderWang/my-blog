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

                const videoUrl = article.video.url ? article.video.url : "";

                return (
                    <div className="article">
                        <div
                            id="banner"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                        >
                            <h1>{article.title}</h1>
                            <img
                                src={imageUrl}
                                alt={imageUrl}
                                className="cover-img"
                            />
                        </div>

                        <section className="article__section">
                            <div className="container container-article">
                                <p className="time">
                                    <Moment format="MMM Do YYYY">
                                        {article.published_at}
                                    </Moment>
                                </p>

                                <ReactMarkdown source={article.content} />

                                {article.video.url && (
                                    <video controls width="500">
                                        <source
                                            src={videoUrl}
                                            type="video/mkv"
                                        />
                                    </video>
                                )}
                            </div>
                        </section>
                    </div>
                );
            }}
        </Query>
    );
};

export default Article;
