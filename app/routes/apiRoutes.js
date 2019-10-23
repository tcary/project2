// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const express = require("express");
// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // 1) add relationships to models
  // 2) remove timestamps on tables (to make importing CSV data easier)
  
  // 3) seed days table

  // done 4) have volunteer fill out form, then create volunteer in table and save volunteerId to front-end somewhere (localStorage?)
  
  // 5) on click of day, do db.Day.findOne({ where: { name: "MM-DD" }})
  // 6) take resulting day object and run day.addVolunteer(idHere)
  // 7) GET route should run `include: [db.Volunteer]` so that it includes an array of committed volunteers 

  // route to display all route objects (including their corresponding arrays of volunteers)
  app.get("/api/days", function (req, res) {
    db.Day.findAll({
      include: [db.Volunteer]
    }).then(function (data) {
      console.log(data);
      res.json("index", days);
    });
  });

  // route to display a single route based on the MM-DD param in the url (includes the corresponding array of volunteers)
  app.get("/api/days/:day", function (req, res) {
    db.Day.findOne({
      where: {
        id: req.params.day
      },
      include: [db.Volunteer]  
    }).then(function (data) {
      res.json(data);
      console.log(data);
    });
  });

  // route to update an existing day by adding a volunteer to that day's volunteer array (if space is available!)
  app.put("/api/days/:day", function (req, res) {
    console.log(req.params.day)
    db.Day.findOne({
      where: {
        name: req.params.day
      }
    }).then(function (day) {
      day.getVolunteers().then(function (volunteer) {
        if (volunteer.length < 5) {
          // maybe pass in the id number below as a key/val pair from the front-end?
          // that way you could access it here using req.body.volunteerId (or some such)
          day.addVolunteer(req.body.userId).then(function (volunteer) {
            console.log("You've been added!");
            res.json(true);
          })
        } else {
          console.log("Too many volunteers!");
          res.json(false);
        }
      });
    });
  });

  //"/api/schedule" 
  app.post("/api/form", function (req, res) {
    console.log(req.body)
    db.Volunteer.create(req.body).then(function (data) {
      console.log("This is what Im looking for", data.id);
      res.json({ id: data.id })
    })
  })

};



