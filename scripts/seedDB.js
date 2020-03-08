const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ReactScraper"
);

const bookSeed = [
  {
    "matchId": "29042634",
    "leagueId": "111",
    "leagueName": "NBA",
    "quarterCount": 4,
    "matchTime": 1573862400,
    "status": -1,
    "quarterRemainTime": "",
    "homeId": "6",
    "homeName": "Orlando Magic",
    "homeRank": 0,
    "awayId": "18",
    "awayName": "San Antonio Spurs",
    "awayRank": 0,
    "homeScore": 111,
    "awayScore": 109,
    "homeFirstQuarterScore": 24,
    "awayFirstQuarterScore": 31,
    "homeSecondQuarterScore": 23,
    "awaySecondQuarterScore": 25,
    "homeThirdQuarterScore": 32,
    "awayThirdQuarterScore": 26,
    "homeFourthQuarterScore": 32,
    "awayFourthQuarterScore": 27,
    "overTimeCount": 0,
    "homeFirstOverTimeScore": 0,
    "awayFirstOverTimeScore": 0,
    "homeSecondOverTimeScore": 0,
    "awaySecondOverTimeScore": 0,
    "homeThirdOverTimeScore": 0,
    "awayThirdOverTimeScore": 0,
    "leagueSeason": "19-20",
    "matchType": 1,
    "hasStats": true,
    "explain": "[Magic][ORL 110-106] Vucevic Free Throw 2 of 2 (10 PTS)",
    "roundType": "",
    "group": "",
    "neutral": false
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
