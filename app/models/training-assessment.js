var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var TrainingAssessment = new Schema({    
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
    q21: String,
    q22: String,
    q23: String,
    q24: String,   
    q25: String,
    q26: String,
    q27: String,
    q28: String,
    q29: String,
    q30: String,
    q31: String,
    q32: String,
    q33: String,
    q34: String,   
    q35: String,
    q36: String,
    q37: String,
    q38: String,
    q39: String,
    q40: String,
    q41: String,
    q42: String,
    q43: String,
    q44: String,   
    q45: String,
    q46: String,
    q47: String,
    q48: String,
    q49: String,
    q50: String,
    q51: String,
    q52: String,
    q53: String,
    q54: String,   
    q55: String,

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

  TrainingAssessment.plugin(uniqueValidator);


module.exports = mongoose.model('TrainingAssessmenttbl', TrainingAssessment);



