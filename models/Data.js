const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 teams: {required: true, type: Array},
 commence_time: {required: true },
 home_team: {required: true, type:String},
 sites: {required: true, type: String}
});

const Data = mongoose.model("Data", bookSchema);

module.exports = Data;
