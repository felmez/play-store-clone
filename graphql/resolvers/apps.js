const { AuthenticationError, UserInputError } = require('apollo-server');

const App = require('../../models/App');
const tokenCheck = require('../../util/tokenCheck');

module.exports = {
    Query: {
        async getApps() {
            try {
                const apps = await App.find().sort({ createdAt: -1 });
                return apps;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getApp(_, { appID }) {
            try {
                const app = await App.findById(appID);
                if (app) {
                    return app;
                } else {
                    throw new Error('App not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createApp(_, { body }, context) {
            const user = tokenCheck(context);

            if (body.trim() === '') {
                throw new UserInputError('Empty App', {
                    errors: {
                        body: 'App body must not be empty'
                    }
                })
            }

            const newApp = new App({
                user: user.id,
                username: user.username,
                body,
                createdAt: new Date().toISOString()
            });

            const app = await newApp.save();

            return app;
        },
        async deleteApp(_, { appID }, context) {
            const user = tokenCheck(context);

            try {
                const app = await App.findById(appID);
                if (user.username === app.username) {
                    await app.delete();
                    return 'Add deleted successfully';
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        async likeApp(_, { appID }, context) {
            const { username } = tokenCheck(context);
            const app = await App.findById(appID);

            if (app) {
                if (app.likes.find(like => like.username === username)) {
                    // app liked, unlike it
                    app.likes = app.likes.filter(like => like.username !== username);
                } else {
                    // app not liked, like it
                    app.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    })
                }
                await app.save();
                return app;
            } else {
                throw new UserInputError('App not found');
            }
        }
    }
}