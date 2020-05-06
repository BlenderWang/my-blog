import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
    query Articles {
        articles {
            id
            image {
                url
            }
            title
            content
            category {
                id
                name
            }
            published_at
        }
    }
`;

export default ARTICLE_QUERY;
