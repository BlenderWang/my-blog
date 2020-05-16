import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
    query Category($id: ID!) {
        category(id: $id) {
            name
            articles {
                id
                title
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
