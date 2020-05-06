import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
    query categories {
        categories {
            id
            name
        }
    }
`;

export default CATEGORIES_QUERY;
