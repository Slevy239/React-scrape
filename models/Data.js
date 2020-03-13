const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    sport_key: { required: false },
    teams: { required: true, type: Array },
    home_team: { required: false, type: String },
    sites: { required: true, type: Array }
});

const Data = mongoose.model("Data", bookSchema);

module.exports = Data;
