import React from "react";
import { useParams } from "react-router";
import Articles from "../components/Articles";
import Query from "../components/Query";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";

const Category = () => {
    let { id } = useParams();

    return (
        <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
            {({ data: { category } }) => {
                return (
                    <div className="container">
                        <h3 className="category__name">{category.name}</h3>
                        <Articles articles={category.articles} />
                    </div>
                );
            }}
        </Query>
    );
};

export default Category;
