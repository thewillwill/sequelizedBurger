// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/burgers", function(req, res) {
      console.log('api-routes: app.get()');
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function(dbBurger) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbBurger);
        });
    });

    // POST route for saving a new todo
    app.post("/api/burgers", function(req, res) {
        console.log('api-routes: app.post()');
        console.log(req.body.te)

        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Burger.create({
            burger_name: req.body.name,
            ingredients: req.body.ingredients,
            devoured: req.body.devoured
        }).then(function(dbBurger) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbBurger);
        });
    });

    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/burgers/:id", function(req, res) {
        console.log('api-routes: app.delete() id:', req.params.id);
        // We just have to specify which todo we want to destroy with "where"
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });

    });

 // PUT route for updating posts
    app.put("/api/burgers/:id", function(req, res) {
        console.log('api-routes: app.put() id:', req.params.id);

        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: { 
              id: req.params.id 
            }
        }).then(function(dbPost) {
            res.json(dbPost)
        })
    });
};