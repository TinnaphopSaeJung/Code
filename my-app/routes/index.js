var express = require("express");
var router = express.Router();

/* GET home page. */
/*router.get("/", function (req, res, next) {
  try {
    let headers = req.headers;
    if (headers.authorization == "") {
      throw { message: "authorization not null", status: 401 }
    }
    return res.status(200).send({
      data: headers,
      message: "get success",
    });
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message
    })
  }
});

router.get("/index/:name", function (req, res, next) {
  let params = req.params;
  console.log(params);
  return res.send(params);
});

router.post("/", function (req, res, next) {
  let body = req.body;
  console.log(body);
  return res.send(body);
});

router.put("/", function (req, res, next) {
  return res.send("Hello PUT API");
});

router.delete("/", function (req, res, next) {
  let query = req.query;
  console.log(query);
  return res.send(query);
});*/



// Exercise
// router.post("/", function (req, res, next) {
//   try {
//     let body = req.body;

//     if (!body || body.length === 0 || body.length === undefined) {
//       throw { message: "Input is empty!!", status: 401 };
//     }

//     let totalCourse = body.length;
//     let totalGrade = 0;
//     let courseList = [];

//     for (let i = 0; i < totalCourse; i++) {
//       let course = body[i];
//       let grade;

//       if (!course.subject || typeof course.subject !== 'string') {
//         throw { message: `Missing or invalid subject at course ${i + 1}`, status: 400 };
//       }
//       if (course.score === undefined || typeof course.score !== 'number') {
//         throw { message: `Missing or invalid score at course ${i + 1}`, status: 400 };
//       }


//       if (course.score >= 80 && course.score <= 100) {
//         grade = 'A';
//         totalGrade += 4.00
//       } else if (course.score >= 70 && course.score < 80) {
//         grade = 'B';
//         totalGrade += 3.00
//       } else if (course.score >= 60 && course.score < 70) {
//         grade = 'C'
//         totalGrade += 2.00
//       } else if (course.score >= 50 && course.score < 60) {
//         grade = 'D'
//         totalGrade += 1.00
//       } else if (course.score >= 0 && course.score < 50) {
//         grade = 'F'
//         totalGrade += 0
//       } else {
//         throw { message: "Please enter a score in the range 0 - 100.", status: 400 };
//       }

//       courseList.push({
//         subject: course.subject,
//         grade: grade
//       })
//     }

//     totalGrade = (totalGrade / totalCourse).toFixed(2);

//     return res.status(200).send({
//       data: {
//         subject: courseList,
//         GPA: totalGrade
//       },
//       message: "success",
//     });

//   } catch (err) {
//     return res.status(err.status || 500).json({
//       message: err.message
//     });
//   }
// });

module.exports = router;
