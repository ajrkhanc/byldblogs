var jwt = require("jsonwebtoken");
var User = require("../models/user");
var Post = require("../models/post");
var Category = require("../models/category");
var cookie = require("cookie-parser");
var config = require("../../config");
var Feedback = require("../models/feedback");
var Jobform = require("../models/jobform");
var Becomeaprofessionalcoach = require("../models/become-a-professional-coach");
var CoachKnowledgeAssessment = require("../models/coach-knowledge-assessment");
var CPassessmetscc = require("../models/cp-assessment");
var Bespokeass = require("../models/bespoke-assessment");
var DTCIAssessment = require("../models/dtci-assessment");
var NodeAssessment = require("../models/node-assessment");
var TRAiningAssessment = require("../models/training-assessment");
var ECFASsessment = require("../models/efc-assessment");

var cors = require("cors");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

module.exports = function (express) {
  var apiRouter = express.Router();
  // define cors options
  var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  apiRouter.use(cors(corsOptions));
  // make a api to get posts from database
  apiRouter.get("/posts", function (req, res) {
    // get all posts from database
    Post.find({ isPublished: 1 }, function (err, posts) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve posts",
        });
      } else {
        posts = posts.reverse();
        res.json(posts);
      }
    });
  });

  // ECF Assessement
  apiRouter.route("/efc-assessment/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var ECFASSessment = new ECFASsessment({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        q16: req.body.q16,
        q17: req.body.q17,
        q18: req.body.q18,
        q19: req.body.q19,
        q20: req.body.q20,
        q21: req.body.q21,
        q22: req.body.q22,
        q23: req.body.q23,
        q24: req.body.q24,
        q25: req.body.q25,
        q26: req.body.q26,
        q27: req.body.q27,
        q28: req.body.q28,
        q29: req.body.q29,
        q30: req.body.q30,
        q31: req.body.q31,
        q32: req.body.q32,
        q33: req.body.q33,
        q34: req.body.q34,
        q35: req.body.q35,
        q36: req.body.q36,
        q37: req.body.q37,
        q38: req.body.q38,
        q39: req.body.q39,
        q40: req.body.q40,
        q41: req.body.q41,
        q42: req.body.q42,
        q43: req.body.q43,
        q44: req.body.q44,
        q45: req.body.q45,
        q46: req.body.q46,
        q47: req.body.q47,
        q48: req.body.q48,
        q49: req.body.q49,
        q50: req.body.q50,
        q51: req.body.q51,
        q52: req.body.q52,
        q53: req.body.q53,
        q54: req.body.q54,
        q55: req.body.q55,
        q56: req.body.q56,
        q57: req.body.q57,
        q58: req.body.q58,
        q59: req.body.q59,
        q60: req.body.q60,
        q61: req.body.q61,
        q62: req.body.q62,
        q63: req.body.q63,
        q64: req.body.q64,
        q65: req.body.q65,
        q66: req.body.q66,
        q67: req.body.q67,
        q68: req.body.q68,
        q69: req.body.q69,
        q70: req.body.q70,
        q71: req.body.q71,
        q72: req.body.q72,
        q73: req.body.q73,
        q74: req.body.q74,
        q75: req.body.q75,
        q76: req.body.q76,
        q77: req.body.q77,
        q78: req.body.q78,
        q79: req.body.q79,
        q80: req.body.q80,
        q81: req.body.q81,
        q82: req.body.q82,
        q83: req.body.q83,
        q84: req.body.q84,
        q85: req.body.q85,
        q86: req.body.q86,
        q87: req.body.q87,
        name: req.body.name,
        email: req.body.email,
        organization: req.body.organization,

        pname: req.body.pname,
        yrole: req.body.yrole,
        startd: req.body.startd,
        completed: req.body.completed,
        initiative: req.body.initiative,

        newnameurl: req.body.newnameurl,
      });
      ECFASsessment.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            ECFASSessment.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // ECF Assessment result
  apiRouter.get("/efc-assessment", function (req, res) {
    ECFASsessment.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // ECF Assessment result by user
  apiRouter.get("/efc-assessment/:username", function (req, res) {
    // get all posts from database
    ECFASsessment.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // Training Assessement
  apiRouter.route("/training-assessment/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var TRainingAssessment = new TRAiningAssessment({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        q16: req.body.q16,
        q17: req.body.q17,
        q18: req.body.q18,
        q19: req.body.q19,
        q20: req.body.q20,
        q21: req.body.q21,
        q22: req.body.q22,
        q23: req.body.q23,
        q24: req.body.q24,
        q25: req.body.q25,
        q26: req.body.q26,
        q27: req.body.q27,
        q28: req.body.q28,
        q29: req.body.q29,
        q30: req.body.q30,
        q31: req.body.q31,
        q32: req.body.q32,
        q33: req.body.q33,
        q34: req.body.q34,
        q35: req.body.q35,
        q36: req.body.q36,
        q37: req.body.q37,
        q38: req.body.q38,
        q39: req.body.q39,
        q40: req.body.q40,
        q41: req.body.q41,
        q42: req.body.q42,
        q43: req.body.q43,
        q44: req.body.q44,
        q45: req.body.q45,
        q46: req.body.q46,
        q47: req.body.q47,
        q48: req.body.q48,
        q49: req.body.q49,
        q50: req.body.q50,
        q51: req.body.q51,
        q52: req.body.q52,
        q53: req.body.q53,
        q54: req.body.q54,
        q55: req.body.q55,

        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organization: req.body.organization,
        newnameurl: req.body.newnameurl,
      });
      TRAiningAssessment.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            TRainingAssessment.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // Training Assessment result
  apiRouter.get("/training-assessment", function (req, res) {
    TRAiningAssessment.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // Training Assessment result by user
  apiRouter.get("/training-assessment/:username", function (req, res) {
    // get all posts from database
    TRAiningAssessment.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // DTCI Assessement
  apiRouter.route("/dtci-assessment/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var Dtciassessment = new DTCIAssessment({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        q16: req.body.q16,
        q17: req.body.q17,
        q18: req.body.q18,
        q19: req.body.q19,
        q20: req.body.q20,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organization: req.body.organization,
        newnameurl: req.body.newnameurl,
      });
      DTCIAssessment.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            Dtciassessment.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // DTCI Assessment result
  apiRouter.get("/dtci-assessment", function (req, res) {
    DTCIAssessment.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // DTCI Assessment result by user
  apiRouter.get("/dtci-assessment/:username", function (req, res) {
    // get all posts from database
    DTCIAssessment.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // Node Assessement
  apiRouter.route("/node-assessment/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var NodeAssessment = new NodeAssessment({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        q16: req.body.q16,
        q17: req.body.q17,
        q18: req.body.q18,
        q19: req.body.q19,
        q20: req.body.q20,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organization: req.body.organization,
        newnameurl: req.body.newnameurl,
      });
      NodeAssessment.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            NodeAssessment.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // NodeAssessment Assessment result
  apiRouter.get("/node-assessment", function (req, res) {
    NodeAssessment.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // NodeAssessment Assessment result by user
  apiRouter.get("/node-assessment/:username", function (req, res) {
    // get all posts from database
    NodeAssessment.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // Bespoke Assessement
  apiRouter.route("/bespoke-assessment/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var Bespokeassobj = new Bespokeass({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organization: req.body.organization,
        newnameurl: req.body.newnameurl,
      });
      Bespokeass.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            Bespokeassobj.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // Bespoke Assessment result
  apiRouter.get("/bespoke-assessment", function (req, res) {
    Bespokeass.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // Bespoke Assessment result by user
  apiRouter.get("/bespoke-assessment/:username", function (req, res) {
    // get all posts from database
    Bespokeass.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // CP Assessement
  apiRouter.route("/cp-assessment/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var CPAssessmetscc = new CPassessmetscc({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organization: req.body.organization,
        newnameurl: req.body.newnameurl,
      });
      CPassessmetscc.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            CPAssessmetscc.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // CP Assessment result
  apiRouter.get("/cp-assessment", function (req, res) {
    CPassessmetscc.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // CP Assessment result by user
  apiRouter.get("/cp-assessment/:username", function (req, res) {
    // get all posts from database
    CPassessmetscc.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // become a Professional Coach Assessement
  apiRouter.route("/become-a-professional-coach/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var BecomeAprofessionalcoach = new Becomeaprofessionalcoach({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organization: req.body.organization,
        newnameurl: req.body.newnameurl,
      });
      Becomeaprofessionalcoach.findOne(
        { email: req.body.email },
        function (err, existingDoc) {
          if (existingDoc) {
            return res.json({
              message: "Email is already registered",
              status: 1,
            });
          } else {
            BecomeAprofessionalcoach.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                return res.json({ message: "Fetching your result", status: 0 });
              }
            });
          }
        }
      );
    });
  });

  // become a Professional Coach result
  apiRouter.get("/become-a-professional-coach", function (req, res) {
    Becomeaprofessionalcoach.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        categories = categories.reverse();
        res.json(categories);
      }
    });
  });

  // become a Professional Coach result by user
  apiRouter.get("/become-a-professional-coach/:username", function (req, res) {
    // get all posts from database
    Becomeaprofessionalcoach.find(
      {
        newnameurl: req.params.username,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // coach knowledge assessment

  apiRouter.post("/coach-knowledge-assessment/", async (req, res) => {
    try {
      // Email check
      const existingDoc = await CoachKnowledgeAssessment.findOne({
        email: req.body.email,
      });
      if (existingDoc) {
        return res.json({ message: "Email is already registered", status: 1 });
      }

      // q1 to q80 handle dynamically
      let assessmentData = {};
      for (let i = 1; i <= 80; i++) {
        assessmentData[`q${i}`] = req.body[`q${i}`];
      }

      // Other required fields
      assessmentData.name = req.body.name;
      assessmentData.email = req.body.email;
      assessmentData.phone = req.body.phone;
      assessmentData.organization = req.body.organization;
      assessmentData.newnameurl = req.body.newnameurl;

      // Create and save
      const assessment = new CoachKnowledgeAssessment(assessmentData);
      await assessment.save();

      res.status(201).json({ message: "Fetching your result", status: 0 });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  });

 // coach knowledge assessment result

   apiRouter.get('/coach-knowledge-assessment', async (req, res) => {
  try {
    const results = await CoachKnowledgeAssessment.find().sort({ created_at: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve assessments' });
  }
});

  // coach knowledge assessment result by user


 apiRouter.get('/coach-knowledge-assessment/:username', async (req, res) => {
  try {
    const results = await CoachKnowledgeAssessment.find({ newnameurl: req.params.username }).sort({ created_at: -1 });

    if (results.length === 0) {
      return res.status(404).json({ message: 'No results found for this user' });
    }

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve results for user' });
  }
});



  // get all categories
  apiRouter.get("/categories", function (req, res) {
    Category.find({}, function (err, categories) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve categories",
        });
      } else {
        res.json(categories);
      }
    });
  });

  // get post by url slug
  apiRouter.get("/post/:slug", function (req, res) {
    // get all posts from database
    Post.findOne(
      {
        posturl: req.params.slug,
      },
      function (err, post) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve post",
          });
        } else {
          res.json(post);
        }
      }
    );
  });

  // get posts by category
  apiRouter.get("/posts/category/:category", function (req, res) {
    // get all posts from database
    Post.find(
      {
        category: req.params.category,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // get posts by tag
  apiRouter.get("/posts/tag/:tag", function (req, res) {
    // get all posts from database
    Post.find(
      {
        tags: req.params.tag,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // get posts by author
  apiRouter.get("/posts/author/:author", function (req, res) {
    // get all posts from database
    Post.find(
      {
        Author: req.params.author,
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // save jobfom api
  apiRouter.route("/jobform/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var jobform = new Jobform({
        FullName: req.body.FullName,
        Gender: req.body.Gender,
        Dob: req.body.Dob,
        MobileNumber: req.body.MobileNumber,
        WhatsappMobileNumber: req.body.WhatsappMobileNumber,
        EmailAddress: req.body.EmailAddress,
        CurrentCity: req.body.CurrentCity,
        CurrentState: req.body.CurrentState,
        PermanentCity: req.body.PermanentCity,
        PermanentState: req.body.PermanentState,
        PermanentAddress: req.body.PermanentAddress,
        CurrentAddress: req.body.CurrentAddress,
        HighestQualification: req.body.HighestQualification,
        ExperienceYears: req.body.ExperienceYears,
        ExperienceMonths: req.body.ExperienceMonths,
        Designation: req.body.Designation,
        Expectedsalary: req.body.Expectedsalary,
        VehicleRequirement: req.body.VehicleRequirement,
        SmartPhone: req.body.SmartPhone,
        NativeLanguage: req.body.NativeLanguage,
        Resume: req.body.random + "_" + req.body.file,
        PublishDate: new Date().toLocaleDateString(),
      });
      jobform.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          return res.json({ message: "jobform Saved" });
        }
      });
    });
  });

  //upload image
  apiRouter.post("/resume", function (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      console.log(files);
      var oldPath = files.file._writeStream.path;
      var newPath =
        path.join(__dirname, "../../public/uploads/proanto/resume") +
        "/" +
        fields.randomno +
        "_" +
        files.file.originalFilename.replace(/\s/g, "");
      var rawData = fs.readFileSync(oldPath);

      fs.writeFile(newPath, rawData, function (err) {
        if (err) console.log(err);
        return res.send("Successfully uploaded");
      });
    });
  });

  // get all jobform
  apiRouter.get("/proanto/jobform", function (req, res) {
    var token = req.cookies.token;
    jwt.verify(token, config.superSecret, function (err, decoded) {
      if (err) {
        res.status(401).json({
          error: "You are not authorized to view this content",
        });
      }
      Jobform.find({}, function (err, Jobform) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve Jobform",
          });
        } else {
          res.json(Jobform);
        }
      });
    });
  });

  // save feedback api
  apiRouter.route("/feedback/").post(function (req, res) {
    console.log(req.body);
    Post.findOne({ url: req.body.posturl }, function (err, post) {
      if (err) {
        console.log(err);
      }
      var feedback = new Feedback({
        user: req.body.name,
        email: req.body.email,
        post: req.body.postslug,
        comment: req.body.feedback,
        PublishDate: new Date().toLocaleDateString(),
      });
      feedback.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          return res.json({ message: "Feeback Saved" });
        }
      });
    });
  });

  // get all getFeedbacks
  apiRouter.get("/getFeedbacks", function (req, res) {
    Feedback.find({}, function (err, Feedback) {
      if (err) {
        res.status(500).json({
          error: "Could not retrieve Feedback",
        });
      } else {
        res.json(Feedback);
      }
    });
  });

  apiRouter.get("/getFeedback/:posturl", function (req, res) {
    // get all posts from database
    Feedback.findOne(
      {
        post: req.params.posturl,
      },
      function (err, feedback) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve feedback",
          });
        } else {
          res.json(feedback);
        }
      }
    );
  });

  // get feedback by post
  apiRouter.get("/posts/feed/:posturl", function (req, res) {
    // get all posts from database
    Feedback.find(
      {
        post: req.params.posturl,
        status: "1",
      },
      function (err, posts) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve posts",
          });
        } else {
          posts = posts.reverse();
          res.json(posts);
        }
      }
    );
  });

  // Find Single Job
  apiRouter.get("/proanto/jobform/:id", function (req, res) {
    Jobform.find(
      {
        _id: req.params.id,
      },
      function (err, jobforms) {
        if (err) {
          res.status(500).json({
            error: "Could not retrieve data",
          });
        } else {
          res.json(jobforms);
        }
      }
    );
  });

  apiRouter
    .route("/signup")
    .get(function (req, res) {
      res.render("Signup");
    })
    .post(function (req, res) {
      var user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        bio: req.body.bio,
        //Role: 'user',
        imageURL: req.body.imageURL || "",
        Social: {
          FaceBook: req.body.facebook || "",
          Twitter: req.body.twitter || "",
          WebSite: req.body.website || "",
          LinkedIn: req.body.linkedin || "",
          YouTube: req.body.youtube || "",
        },
      });
      user.save(function (err) {
        if (err) {
          return res
            .status(406)
            .json({ message: "can't save user because of " + err });
        }

        var token = jwt.sign(user, config.superSecret, {
          //expiresIn: '24 days'
          expiresIn: "24 days",
        });
        res.cookie("token", token);
        /*user.password = null;
        localStorage.user = user;*/
        res.json({ message: "user with name : " + user.name + " Added" });
      });
    });

  apiRouter
    .route("/login")
    .get(function (req, res) {
      var token = req.cookies.token;
      if (!token) {
        //res.render('login');
        res.json("as login page");
      }
      res.redirect("/");
    })
    .post(function (req, res) {
      var jsob;
      if (req.body.username.indexOf("@") === -1) {
        jsob = {
          username: req.body.username,
        };
      } else {
        jsob = {
          email: req.body.username,
        };
      }
      // User.findOne(jsob).select('email password name bio Role imageURL username Social').exec(function (err, user) {
      //   if (!user) {
      //     return res.status(404).json({ message: 'User not found.' });
      //   }

      //   if (!user.comparePassword(req.body.password)) {
      //     return res.status(406).json({ message: 'Wrong Password' });
      //   }
      //   var token = jwt.sign(user, config.superSecret, {
      //     expiresIn: '24 days'
      //   });
      //   res.cookie('token', token, { httpOnly: true });
      //   user.password = null;
      //   res.cookie('decoded', { _doc: user }, { httpOnly: true });
      //   return res.json({ message: 'LoggedIn' });// replaced with redirect
      // });

      User.findOne(jsob)
        .select("email password name bio Role imageURL username Social")
        .exec(function (err, user) {
          if (!user) {
            return res.status(404).json({ message: "User not found." });
          }

          if (!user.comparePassword(req.body.password)) {
            return res.status(406).json({ message: "Wrong Password" });
          }

          const plainUser = user.toObject(); // ✅ convert mongoose doc to plain object
          delete plainUser.password;

          const token = jwt.sign(plainUser, config.superSecret, {
            expiresIn: "24 days",
          });

          res.cookie("token", token, { httpOnly: true });
          res.cookie("decoded", plainUser, { httpOnly: true }); // ✅ No _doc now
          return res.json({ message: "LoggedIn" });
        });
    });

  apiRouter.route("/logout").get(function (req, res) {
    res.clearCookie("token");
    res.clearCookie("decoded");
    res.clearCookie({});
    res.json({ message: "LoggedOut" });
  });

  apiRouter.use(function (req, res, next) {
    if (!req.cookies.token) {
      res.redirect("/login");
    }
    jwt.verify(req.cookies.token, config.superSecret, function (err, decoded) {
      req.decoded = decoded;
      next();
    });
  });

  // apiRouter.get('/profile', function (req, res) {
  //   res.json({ user: req.decoded._doc });
  // });

  apiRouter.get("/profile", function (req, res) {
    if (!req.decoded || !req.decoded._doc) {
      return res.status(401).json({ message: "Unauthorized or invalid token" });
    }
    res.json({ user: req.decoded._doc });
  });

  ~apiRouter.get("/", function (req, res) {
    res.json(req.decoded);
  });

  apiRouter.post("/changedetails", function (req, res) {
    User.findOne({ email: req.decoded._doc.email }, function (err, user) {
      if (err) res.status(400).json({ message: "user not found" });
      user.password = req.body.password || req.decoded._doc.password;
      user.name = req.body.name || req.decoded._doc.name;
      user.bio = req.body.bio || req.decoded._doc.bio;
      user.Role = req.decoded._doc.Role;
      user.imageURL = req.body.imageURL || req.decoded._doc.imageURL;
      user.save(function (err) {
        if (err) {
          res.status(400).json({ message: "Wrong thing" });
        }
        user.password = null;
        res.cookie("decoded", { _doc: user }, { httpOnly: true });
        res.json({ message: "updated !!" });
      });
    });
  });
  /*
  User.findOneAndUpdate({email:req.decoded._doc.email},{$set:{
    password : req.body.password || req.decoded._doc.password,
    name: req.body.name || req.decoded._doc.name,
    bio: req.body.bio || req.decoded._doc.bio,
    Role: req.decoded._doc.Role,
    imageURL: req.body.imageURL || req.decoded._doc.imageURL
  }},function(err){
    if(err){
      console.log(err);
      return;
    }
    res.json({message:'updated !!'});
  });
  
  */
  //Admin middleware
  apiRouter.use(function (req, res, next) {
    if (req.decoded._doc.Role == "admin") {
      return next();
    }
    return res.redirect("/");
  });

  apiRouter.post("/changerole", function (req, res) {
    User.findOneAndUpdate(
      { username: req.body.username },
      { $set: { Role: req.body.Role } },
      function (err) {
        if (err) {
          console.log(err);
          res.status(400).json({ message: "error" });
          return;
        }
        res.json({ message: "Updated" });
      }
    );
  });

  apiRouter.get("/AllUsers", function (req, res) {
    User.find({}, function (err, users) {
      if (err) throw err;
      res.cookie("users", users, { httpOnly: true });
      res.json({ users: users });
    });
  });

  return apiRouter;
};
