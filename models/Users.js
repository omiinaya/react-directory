const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
    },
    number: {
        type: String,
    },
    title: {
        type: String,
    },
    email: {
        type: String,
    }
})

const Employees = mongoose.model("Employees", User);

module.exports = Employees;