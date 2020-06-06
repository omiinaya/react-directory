const router = require("express").Router();
const employees = require("../models/Users");

module.exports = function(app) {
    app.get("/api/users", function (req, res){
        employees.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })
}