let student1 = {studentName: "Drake", mark:60};

let student2 = {studentName: "Nothando", mark:90};

let student3 = {studentName: "Zuko", mark:30};


let students = [student1,student2,student3];

let employees = [
    { name: "Drake", age: 23, gender: "Male" },
    { name: "Nothando", age: 63, gender: "Female" },
    { name: "Zuko", age: 47, gender: "Male" },
  ];



  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.studentName);
  }


function findStudents(name)
{
    // let res = students.find(student) => student.studentName === name);
    
    let res = students.filter(student => {
        return student.mark >50;
    });

    console.log(res.length)
}
findStudents("Zuko")


  // What is the average age for students who are male?


  let maleEmployees = employees.filter(employee => employee.gender === "Male");

  let totalAge = maleEmployees.reduce((acc, employee) => acc + employee.age, 0);
  
  let averageAge = totalAge / maleEmployees.length;
  
  console.log("Average age of male employees: " + averageAge);



