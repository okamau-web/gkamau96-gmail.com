const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/user");
const Property = require("../model/property")
const mongoose = require("mongoose");

//  const db =
//   "mongodb+srv://hannah:hanna@eventsdb-kcpmt.mongodb.net/test?retryWrites=true&w=majority";
//  mongoose.connect(db, err => {
//     if (err) {
//         console.error("Not Connected" + err);
//     } else {
//          console.log("Connected to mongoDB");
//     }
// } );

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


router.get("/events", (req, res) => {
    let events = [{
            id: "1",
            name: "Product 1",
            description: "white/red",
            date: "2019-12-5",
            price: "ksh 100/kg"
        },
        {
            id: "2",
            name: "Product 2",
            description: "Modern Coast",
            date: "2019-12-6",
            price: "ksh 100/kg"
        },
        {
            id: "3",
            name: "Product 3",
            description: "Tahmeed",
            date: "2019-12-7",
            price: "ksh */kg"
        }
    ];
    res.json(events);
});

router.get("/special", /*verifyToken,*/ (req, res) => {
    let events = [{
            id: "1",
            name: "Celebrations",
            description: "Birthday party",
            date: "2019-12-5"
        },
        {
            id: "2",
            name: " Celebrations",
            description: " Wedding Party",
            date: "2019-12-6"
        },
        {
            id: "2",
            name: " Celebrations",
            description: " Wedding Party",
            date: "2019-12-6"
        }
    ];
    res.json(events);
});



router.get("/property", (req, res) => {
    /*   db.property.find().pretty(); */
    let property = [{
            id: "1",
            name: " Kamau Plaza",
            description: "1&2 bedrooms",
            location: "237 Thika",
            price: 6000
        },
        {
            id: "2",
            name: " Kamau Plaza",
            description: "1&2 bedrooms",
            location: "237 Thika",
            price: 6000
        },
        {
            id: "2",
            name: " Kamau Plaza",
            description: "1&2 bedrooms",
            location: "237 Thika",
            price: 6000
        },


    ];
    res.json(property);
});

module.exports = router;
