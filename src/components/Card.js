import React from "react";
import { Link } from "react-router-dom";

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
                <p className="card__content">{article.content.slice(0, 500)}</p>
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
            <h4 className="card__publishedAt">{article.published_at}</h4>
        </div>
    );
};

export default Card;
