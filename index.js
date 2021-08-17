const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);
const config = require("./config/key");
const mongoose = require("mongoose");

const { Main } = require("./model/Main.js");

//Using 'public' dir
app.use(express.static("public"));

//body-parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Using ejs template
app.set("view engine", "ejs");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connecting...");
    http.listen(port, function () {
      console.log("listening on", port);
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  Main.findOne({ name: "LivingCat" })
    .exec()
    .then((response) => {
      console.log(response);
      return res.render("index.ejs", {
        total: response.total,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

app.post("/indexResult", (req, res) => {
  let result = req.body.result;
  let CatResult = "Cat" + result;

  Main.findOneAndUpdate({ name: "LivingCat" }, { $inc: { total: 1 } })
    .exec()
    .then(() => {
      Main.findOneAndUpdate({ name: "LivingCat" }, { $inc: { [CatResult]: 1 } })
        .exec()
        .then(() => {
          Main.findOne({ name: "LivingCat" })
            .exec()
            .then((response) => {
              console.log(response);
              return res.render("indexResult.ejs", {
                data: result,
                total: response.total,
                resultNum: response[CatResult],
              });
            });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

app.get("/indexResult", (req, res) => {
  res.render("index.ejs", {});
});
