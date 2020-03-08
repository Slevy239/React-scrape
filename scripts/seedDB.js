const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ReactScraper"
);

const bookSeed = [
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "teams": [
      "Leicester City",
      "Watford"
    ],
    "commence_time": 1584189000,
    "home_team": "Watford",
    "sites": [
      {
        "site_key": "skybet",
        "site_nice": "Sky Bet",
        "last_update": 1583699486,
        "odds": {
          "h2h": [
            2.3,
            2.9,
            3.5
          ]
        }
      },
      {
        "site_key": "onexbet",
        "site_nice": "1xBet",
        "last_update": 1583699516,
        "odds": {
          "h2h": [
            2.4,
            3.05,
            3.68
          ]
        }
      },
      {
        "site_key": "paddypower",
        "site_nice": "Paddy Power",
        "last_update": 1583699475,
        "odds": {
          "h2h": [
            2.3,
            2.88,
            3.4
          ]
        }
      },
      {
        "site_key": "betvictor",
        "site_nice": "Bet Victor",
        "last_update": 1583699147,
        "odds": {
          "h2h": [
            2.38,
            3,
            3.4
          ]
        }
      },
      {
        "site_key": "marathonbet",
        "site_nice": "Marathon Bet",
        "last_update": 1583699516,
        "odds": {
          "h2h": [
            2.38,
            3.02,
            3.65
          ]
        }
      },
      {
        "site_key": "unibet",
        "site_nice": "Unibet",
        "last_update": 1583699474,
        "odds": {
          "h2h": [
            2.3,
            3,
            3.55
          ]
        }
      },
      {
        "site_key": "sport888",
        "site_nice": "888sport",
        "last_update": 1583699476,
        "odds": {
          "h2h": [
            2.3,
            3,
            3.55
          ]
        }
      },
      {
        "site_key": "betfair",
        "site_nice": "Betfair",
        "last_update": 1583699474,
        "odds": {
          "h2h": [
            2.42,
            3,
            3.6
          ],
          "h2h_lay": [
            2.54,
            3.2,
            3.65
          ]
        }
      },
      {
        "site_key": "williamhill",
        "site_nice": "William Hill",
        "last_update": 1583699533,
        "odds": {
          "h2h": [
            2.38,
            2.9,
            3.5
          ]
        }
      },
      {
        "site_key": "ladbrokes",
        "site_nice": "Ladbrokes",
        "last_update": 1583699517,
        "odds": {
          "h2h": [
            2.35,
            2.9,
            3.4
          ]
        }
      },
      {
        "site_key": "betfred",
        "site_nice": "Betfred",
        "last_update": 1583699146,
        "odds": {
          "h2h": [
            2.3,
            2.9,
            3.5
          ]
        }
      }
    ],
    "sites_count": 11
  },
];

db.Data
  .remove({})
  .then(() => db.Data.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
