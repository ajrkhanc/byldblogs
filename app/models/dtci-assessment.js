var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var DtciAssessment = new Schema({    
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
    q11: String,
    q12: String,
    q13: String,
    q14: String,   
    q15: String,
    q16: String,
    q17: String,
    q18: String,
    q19: String,
    q20: String,
    name: String,
    email:{
      type: String,
      required: true,
      unique: true
  },
    phone: String,
    organization: String,
    newnameurl: String,
    created_at: { type: Date, required: true, default: Date.now }
  
  });

  DtciAssessment.plugin(uniqueValidator);


module.exports = mongoose.model('DtciAssessmenttbl', DtciAssessment);



