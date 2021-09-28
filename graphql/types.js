const { gql } = require('apollo-server');

module.exports = gql`
    type App{
        id: ID!
        username: String!
        body: String!
        createdAt: String!
        reviewsCount: Int!
    }
    type Review{
        id: ID!
        username: String!
        body: String!
        createdAt: String!
    }
    type Like{
        id: ID!
        username: String!
        createdAt: String!
    }
    type User{
        id: ID!
        username: String!
        email: String!
        token: String!
        createdAt: String!
    }
    input RegisterInput{
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }
    type Query{
        getApps: [App]
        getApp(appID: ID!): App
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createApp(body: String!): App!
        deleteApp(appID: ID!): String!
        createReview(appID: ID!, body: String!): App!
        deleteReview(appID: ID!, reviewID: ID!): App!
        likeApp(appID: ID!): App!
    }
`