const person = require('../models/Person')

module.exports = function(app, db) {
    app.post("/notes", (req, res) => {
//        var person = new Person();
        person.name = "CHetan";
        person.age = "35";
        res.send(JSON.stringify(person));
    });
};