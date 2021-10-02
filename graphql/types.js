const { gql } = require('apollo-server');

module.exports = gql`
    type App{
        id: ID!
        name: String!
        username: String!
        body: String!
        category: String!
        createdAt: String!
        reviews: [Review]!
        reviewsCount: Int!
    }
    type Review{
        id: ID!
        username: String!
        body: String!
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
        createApp(body: String!, name: String!, category: String!): App!
        deleteApp(appID: ID!): String!
        createReview(appID: ID!, body: String!): App!
        deleteReview(appID: ID!, reviewID: ID!): App!
    }
`