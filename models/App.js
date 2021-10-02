const { model, Schema } = require('mongoose');

const appSchema = new Schema({
    name: String,
    username: String,
    body: String,
    category: String,
    createdAt: String,
    reviews: [{
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