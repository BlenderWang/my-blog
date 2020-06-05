import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
    query Articles($id: ID!) {
        article(id: $id) {
            id
            title
            excerpt
            content
            image {
                url
            }
            category {
                id
                name
            }
            published_at
            video {
                url
            }
        }
    }
`;

export default ARTICLE_QUERY;
