const appsResolvers = require('./apps');
const usersResolvers = require('./users');

module.exports = {
    App: {

    },
    Query: {
        ...appsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...appsResolvers.Mutation,
    }
};