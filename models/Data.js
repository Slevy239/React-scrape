const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 teams: {required: true, type: Array},
 commence_time: {required: false },
 home_team: {required: false, type:String},
 sites: {required: false, type: String}
});

const Data = mongoose.model("Data", bookSchema);

module.exports = Data;
