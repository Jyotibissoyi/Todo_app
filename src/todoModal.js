const { default: mongoose } = require("mongoose");

const todoList = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    deadline: {
        type: Date,
    }
}, { timestamps: true, strict: false });

module.exports = mongoose.model('todoList', todoList);