const appsResolvers = require('./apps');
const usersResolvers = require('./users');
const reviewsResolvers = require('./reviews');

module.exports = {
    App: {
        reviewsCount: (parent) => parent.reviews.length
    },
    Query: {
        ...appsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...appsResolvers.Mutation,
        ...reviewsResolvers.Mutation
    }
};