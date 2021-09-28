const { UserInputError, AuthenticationError } = require('apollo-server');

const App = require('../../models/App');
const tokenCheck = require('../../util/tokenCheck');

module.exports = {
    Mutation: {
        createReview: async (_, { appID, body }, context) => {
            const { username } = tokenCheck(context);

            if (body.trim() === '') {
                throw new UserInputError('Empty review', {
                    errors: {
                        body: 'Review body must not be empty'
                    }
                })
            }

            const app = await App.findById(appID);

            if (app) {
                app.reviews.unshift({
                    username,
                    body,
                    createdAt: new Date().toISOString()
                });
                await app.save();
                return app;
            } else {
                throw new UserInputError('App not found');
            }
        },
        deleteReview: async (_, { appID, reviewID }, context) => {
            const { username } = tokenCheck(context);
            const app = await App.findById(appID);

            if (app) {
                const reviewIndex = app.reviews.findIndex(review => review.id === reviewID);

                if (app.reviews[reviewIndex].username === username) {
                    app.reviews.splice(reviewIndex, 1);
                    await app.save();
                    return app;
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } else {
                throw new UserInputError('App not found')
            }
        }
    }
}