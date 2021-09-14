const { model, Schema } = require('mongoose');

const appSchema = new Schema({
    username: String,
    body: String,
    createdAt: String,
    comments: [{
        body: String,
        username: String,
        createdAt: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('App', appSchema);