const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const path = require("path");

console.log("push!")
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./models");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ReactScraper");


app.get("/", function (req, res) {
  console.log("scraped")
  axios.get("https://www.nytimes.com/section/sports").then(function (response) {
      var $ = cheerio.load(response.data);
      $("article").each(function (i, element) {
          var result = {};


          summary = ""
          if ($(this).find("ul").length) {
              summary = $(this).find("li").first().text();
          } else {
              summary = $(this).find("p").text();
          };

          result.title = $(this).find("h2").text();
          // result.summary = summary;
          // result.link = "https://www.nytimes.com" + $(this).find("a").attr("href");

          db.Data.create(result)
              .then(function (dbArticles) {
                  console.log(result);
              })
              .catch(function (err) {
                  console.log(err)
              })
      });
      // console.log(result);
      res.send("Scrape Complete")
  });
});




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
