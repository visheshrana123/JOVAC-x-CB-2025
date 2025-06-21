const students = [
  { name: "Aarav", age: 18, marks: 85 },
  { name: "Bharat", age: 20, marks: 45 },
  { name: "Charu", age: 22, marks: 92 },
  { name: "Dev", age: 19, marks: 67 },
  { name: "Esha", age: 21, marks: 78 },
  { name: "Farhan", age: 18, marks: 55 },
  { name: "Geeta", age: 20, marks: 88 },
  { name: "Harsh", age: 22, marks: 32 },
  { name: "Isha", age: 19, marks: 75 },
  { name: "Jatin", age: 21, marks: 60 },
  { name: "Kiran", age: 20, marks: 95 },
  { name: "Lata", age: 22, marks: 80 },
  { name: "Manav", age: 18, marks: 50 },
  { name: "Neha", age: 19, marks: 40 },
  { name: "Om", age: 21, marks: 73 },
  { name: "Pooja", age: 20, marks: 82 },
  { name: "Qasim", age: 22, marks: 68 },
  { name: "Riya", age: 19, marks: 91 },
  { name: "Sumit", age: 20, marks: 47 },
  { name: "Tina", age: 21, marks: 86 }
];
//. map() — Extract All Names

const studentNames = students.map(student => student.name);
console.log("Names of all students:", studentNames);

//. filter() — Students Who Passed (marks ≥ 50)

const passedStudents = students.filter(student => student.marks >= 50);
console.log("Passed students:", passedStudents);

//reduce() — Total & Average Marks

const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
const averageMarks = totalMarks / students.length;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));

//BONUS: Grade Assignment using map() (Business Logic)

const gradedStudents = students.map(student => {
  let grade = "";
  if (student.marks >= 90) grade = "A+";
  else if (student.marks >= 80) grade = "A";
  else if (student.marks >= 70) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else if (student.marks >= 50) grade = "D";
  else grade = "F";

  return { ...student, grade };
});
console.log("Students with Grades:", gradedStudents);




