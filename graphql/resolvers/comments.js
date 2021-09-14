const { UserInputError, AuthenticationError } = require('apollo-server');

const App = require('../../models/App');
const tokenCheck = require('../../util/tokenCheck');

module.exports = {
    Mutation: {
        createComment: async (_, { appID, body }, context) => {
            const { username } = tokenCheck(context);

            if (body.trim() === '') {
                throw new UserInputError('Empty comment', {
                    errors: {
                        body: 'Comment body must not be empty'
                    }
                })
            }

            const app = await App.findById(appID);

            if (app) {
                app.comments.unshift({
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
        deleteComment: async (_, { appID, commentID }, context) => {
            const { username } = tokenCheck(context);
            const app = await App.findById(appID);

            if (app) {
                const commentIndex = app.comments.findIndex(comment => comment.id === commentID);

                if (app.comments[commentIndex].username === username) {
                    app.comments.splice(commentIndex, 1);
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