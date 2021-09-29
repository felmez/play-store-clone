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
        async createApp(_, { body, name }, context) {
            const user = tokenCheck(context);

            if (body.trim() === '') {
                throw new UserInputError('Empty App', {
                    errors: {
                        body: 'App body must not be empty'
                    }
                })
            }

            if (name.trim() === '') {
                throw new UserInputError('Empty Name', {
                    errors: {
                        name: 'App name must not be empty'
                    }
                })
            }

            const newApp = new App({
                user: user.id,
                username: user.username,
                body,
                name,
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
        }
    }
}