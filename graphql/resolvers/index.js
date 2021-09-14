const appsResolvers = require('./apps');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
    App: {
        commentsCount: (parent) => parent.comments.length
    },
    Query: {
        ...appsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...appsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};