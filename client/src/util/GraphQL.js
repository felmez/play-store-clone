import { gql } from '@apollo/client'

export const FETCH_APPS_QUERY = gql`
    {
        getApps{
            id
            username
            body
            createdAt
            commentsCount
        }
    }
`;