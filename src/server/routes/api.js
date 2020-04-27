const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/user");
const Property = require("../model/property")
const mongoose = require("mongoose");

//**online mongodb**//
//  const db =
//   "mongodb+srv://hannah:hanna@eventsdb-kcpmt.mongodb.net/test?retryWrites=true&w=majority";
//  mongoose.connect(db, err => {
//     if (err) {
//         console.error("Not Connected" + err);
//     } else {
//          console.log("Connected to mongoDB");
//     }
// } );

      //*local mongodb */

mongoose.connect('mongodb://localhost/platform', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}) .then(() => 'You are now connected to Mongo!')
.catch(err => console.error('Something went wrong', err))



router.get("/", function(req, res) {
    res.send("From API router");
});

router.post("/register", (req, res) => {
    var user = new User(req.body);

    user
        .save()
        .then(registeredUser => {
            var payload = { subject: registeredUser._id };
            var token = jwt.sign(payload, "secretKey");
            res.status(200).send({ token });
        })
        .catch(e => {
            console.log("error occured", e);
        });
});

router.post("/property", (req, res) => {
    var property = new Property(req.body);

    property
        .save()
        .then(registeredProperty => {
            if (error) { console.log(error); } else { res.status(200).send('property added successfuly') };
            /* var payload = { subject: registeredProperty._id };
            var token = jwt.sign(payload, "secretKey");
            res.status(200).send({ token }); */
        })
        .catch(e => {
            console.log("error occured", e);
        });
});

router.post("/login", (req, res) => {
    let userData = req.body;

    User.findOne({ username: userData.username }, (error, user) => {
        if (error) {
            //console.log(error);

        } else {
            if (!user) {
                res.status(401).send("Invalid username");
            } else if (user.password !== userData.password) {
                res.status(401).send("Invalid password");
            } else {
                var payload = { subject: user._id };
                var token = jwt.sign(payload, "secetKey");
                res.status(200).send({ user, token });
            }
        }
    });
});


module.exports = router;
