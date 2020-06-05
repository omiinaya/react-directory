const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Book = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
})

const documents = mongoose.model("documents", Book);

module.exports = documents;