const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const DiscSeriesSchema = new Schema({
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String,
  q6: String,
  q7: String,
  q8: String,
  q9: String,
  q10: String,
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  organization: String,
  newnameurl: String,
  created_at: { type: Date, required: true, default: Date.now },
});

DiscSeriesSchema.plugin(uniqueValidator);
module.exports = mongoose.model("DiscSeries", DiscSeriesSchema);
