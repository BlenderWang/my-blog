import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const Card = ({ article }) => {
    const imageUrl =
        process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;

    return (
        <div className="card">
            <img
                src={imageUrl}
                alt={article.image.url}
                className="card__image"
            />
            <div className="card__body">
                <Link to={`/article/${article.id}`} className="link-reset">
                    <h3 className="card__title">{article.title}</h3>
                </Link>
                <div className="card__line" />
                <div className="card__content">
                    <ReactMarkdown source={article.excerpt} />
                </div>
                <div className="card__bottom-row">
                    <h4 className="card__category">
                        Category: {article.category.name}
                    </h4>
                    <Link to={`/article/${article.id}`} className="link-reset">
                        <span>
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="card__publishedAt">
                <h4 className="date">
                    <Moment format="D">{article.published_at}</Moment>
                </h4>
                <h5 className="month year">
                    <Moment format="MMM YYYY">{article.published_at}</Moment>
                </h5>
            </div>
        </div>
    );
};

export default Card;
