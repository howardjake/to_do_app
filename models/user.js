const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    todos: [{type: Schema.Types.ObjectId, ref: "Todo"}]
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)