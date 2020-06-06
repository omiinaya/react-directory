const Employees = require("../models/Users");

module.exports = function(app) {
    app.get("/api/users", function (req, res){
        Employees.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })
}