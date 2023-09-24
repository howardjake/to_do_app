const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: String,
    description: String,
    priority: String,
    completed: Boolean,
    dueDate: Date
},{
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema)