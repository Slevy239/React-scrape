const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    sport_key: { required: false },
    teams: { required: true, type: Array },
    home_team: { required: false, type: String },
    sites: { required: true, type: Array }
});

// const Data = mongoose.model("Data", DataSchema);

module.exports = mongoose.model("Data", DataSchema);
