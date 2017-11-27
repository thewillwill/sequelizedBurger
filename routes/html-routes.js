// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        console.log('html-routes: app.get()');
        db.Burger.findAll({}).then(function(dbPost) {
            // We have access to the post as an argument inside of the callback function
            //console.log("dbPost: ", dbPost);
            //res.json(dbPost);
            res.render("index", {burgers: dbPost});
            // console.log('findAll():', allData);
            
        });

    });

};