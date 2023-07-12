const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mentors = [];

// Parse JSON request body
app.use(bodyParser.json());

// Endpoint to create a Mentor
app.post('/mentors', (req, res) => {
  const { id, name, expertise, students } = req.body;

  // Perform validation or additional logic as needed

  const mentor = {
    id,
    name,
    expertise,
    students,
  };

  mentors.push(mentor);

  res.status(201).json({ message: 'Mentor created successfully.', mentor });
});


const students = [];

// Endpoint to create a Student
app.post("/students", (req, res) => {
  const { id,name, age, mentor } = req.body;
  const student = {
    id: students.length + 1,
    name,
    age,
    mentor: null,
  };
  students.push(student);
  res.status(201).json({ message: "Student created successfully.", student });
});

// Endpoint to assign Students to a Mentor
app.post("/mentors/:mentorId/students", (req, res) => {
  const mentorId = req.params.mentorId;
  const studentIds = req.body.studentIds;

  const mentor = mentors.find((mentor) => mentor.id === mentorId);
  if (!mentor) {
    return res.status(404).json({ error: "Mentor not found." });
  }

  studentIds.forEach((studentId) => {
    const student = students.find((student) => student.id === studentId);
    if (student && !student.mentor) {
      mentor.students.push(student);
      student.mentor = mentor;
    }
  });

  res
    .status(200)
    .json({ message: "Students assigned to the mentor successfully.", mentor });
});

// Endpoint to assign or change Mentor for a Student
app.put("/students/:studentId/mentor", (req, res) => {
  const studentId = req.params.studentId;
  const mentorId = req.body.mentorId;

  const student = students.find((student) => student.id === studentId);
  if (!student) {
    return res.status(404).json({ error: "Student not found." });
  }

  const mentor = mentors.find((mentor) => mentor.id === mentorId);
  if (!mentor) {
    return res.status(404).json({ error: "Mentor not found." });
  }

  if (student.mentor) {
    // Remove the student from the previous mentor's students list
    const prevMentor = student.mentor;
    prevMentor.students = prevMentor.students.filter(
      (std) => std.id !== studentId
    );
  }

  student.mentor = mentor;
  mentor.students.push(student);

  res
    .status(200)
    .json({ message: "Mentor assigned to the student successfully.", student });
});

// Endpoint to show all Students for a particular Mentor
app.get("/mentors/:mentorId/students", (req, res) => {
  const mentorId = req.params.mentorId;
  const mentor = mentors.find((mentor) => mentor.id === mentorId);
  if (!mentor) {
    return res.status(404).json({ error: "Mentor not found." });
  }

  res.status(200).json({ students: mentor.students });
});

// Endpoint to show the previously assigned Mentor for a Student
app.get("/students/:studentId/mentor", (req, res) => {
  const studentId = req.params.studentId;
  const student = students.find((student) => student.id === studentId);
  if (!student) {
    return res.status(404).json({ error: "Student not found." });
  }

  const mentor = student.mentor;
  if (!mentor) {
    return res
      .status(404)
      .json({ error: "No mentor assigned to the student." });
  }

  res.status(200).json({ mentor });
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
