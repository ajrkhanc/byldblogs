var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var CoachKnowledgeAssessment = new Schema({
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
    q56: String,
    q57: String,
    q58: String,
    q59: String,
    q60: String,
    q61: String,
    q62: String,
    q63: String,
    q64: String,
    q65: String,
    q66: String,
    q67: String,
    q68: String,
    q69: String,
    q70: String,
    q71: String,
    q72: String,
    q73: String,
    q74: String,
    q75: String,
    q76: String,
    q77: String,
    q78: String,
    q79: String,
    q80: String,
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

CoachKnowledgeAssessment.plugin(uniqueValidator);
module.exports = mongoose.model('coachknowledgeassessmenttbl', CoachKnowledgeAssessment);

// This model is used to store the knowledge assessment for coaches, including a wide range of questions and personal information.
// It ensures that each email is unique and timestamps the creation of each assessment entry.
// The schema includes fields for various questions (q1 to q80), personal details like name, email, phone, organization, and a unique URL for the assessment.
// The uniqueValidator plugin is used to enforce the uniqueness of the email field, preventing duplicate entries in the database.
// The model is exported for use in other parts of the application, allowing for the creation, retrieval, and management of coach knowledge assessments.
// This model is used to store the knowledge assessment for coaches, including a wide range of questions and personal information.
// It ensures that each email is unique and timestamps the creation of each assessment entry.
// The schema includes fields for various questions (q1 to q80), personal details like name, email, phone, organization, and a unique URL for the assessment.
// The uniqueValidator plugin is used to enforce the uniqueness of the email field, preventing duplicate entries in the database.
// The model is exported for use in other parts of the application, allowing for the creation, retrieval, and management of coach knowledge assessments.
// This model is used to store the knowledge assessment for coaches, including a wide range of questions and personal information.
// It ensures that each email is unique and timestamps the creation of each assessment entry.
// The schema includes fields for various questions (q1 to q80), personal details like name, email, phone, organization, and a unique URL for the assessment.
// The uniqueValidator plugin is used to enforce the uniqueness of the email field, preventing duplicate entries in the database.
// The model is exported for use in other parts of the application, allowing for the creation, retrieval, and management of coach knowledge assessments.
// This model is used to store the knowledge assessment for coaches, including a wide range of questions and personal information.
// It ensures that each email is unique and timestamps the creation of each assessment entry.
// The schema includes fields for various questions (q1 to q80), personal details like name, email, phone, organization, and a unique URL for the assessment.
