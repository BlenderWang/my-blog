import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
    query Category($id: ID!) {
        category(id: $id) {
            name
            articles(sort: "published_at:desc") {
                id
                title
                excerpt
                content
                image {
                    url
                }
                published_at
                category {
                    id
                    name
                }
            }
        }
    }
`;

export default CATEGORY_ARTICLES_QUERY;
