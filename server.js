const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const db = require('./config/db')
const app = express();

const port = 7000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database)=>{
    if(err) return console.log('err came');

    require("./app/routes")(app, database.db('notable'));

    app.listen(port, () => {
      console.log("We are live on 7000");
    });

})