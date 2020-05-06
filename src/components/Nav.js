// eslint-disable-next-line
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Query from "./Query";

import CATEGORIES_QUERY from "../queries/category/categories";

const Nav = () => {
    // const [showShadow, setShadow] = useState(false)

    // const shadow = showShadow ? 'nav--shadow' : ''

    return (
        <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
                return (
                    <nav className="nav navbar nav--shadow">
                        <ul className="ul-title">
                            <li>
                                <Link to="/">
                                    <img
                                        src="https://res.cloudinary.com/shirlzzz9/image/upload/a_hflip,c_fill,g_face,h_707,q_100,r_30,x_0/a_0/v1588752432/Grid_Img_Gallery/5.jpg"
                                        alt="a version of me for my blog"
                                        className="me"
                                        height="100"
                                    />
                                </Link>
                            </li>
                        </ul>

                        {/* <button className="menu-btn" type="button">
                            <span className="bar"></span>
                        </button> */}

                        <ul className="ul-categories">
                            {categories.map((category, i) => {
                                return (
                                    <li key={category.id}>
                                        <Link
                                            to={`/category/${category.id}`}
                                            className="category-link-name"
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                );
            }}
        </Query>
    );
};

export default Nav;
