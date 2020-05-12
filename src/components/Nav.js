import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Burger } from "./Burger";
import Query from "./Query";
import CATEGORIES_QUERY from "../queries/category/categories";
import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldShowShadow(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? "nav--shadow" : "";

    return (
        <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
                return (
                    <nav className={`nav navbar ${shadowStyle}`}>
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

                        <Burger open={open} setOpen={setOpen} />

                        <ul
                            className={
                                open === true
                                    ? "ul-categories open"
                                    : "ul-categories"
                            }
                        >
                            {categories.map((category, i) => {
                                return (
                                    <li key={category.id}>
                                        <Link
                                            to={`/category/${category.id}`}
                                            className="category-link-name"
                                            onClick={() => close()}
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
