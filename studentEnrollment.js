// Student Enrollment

// Arrays for each subjects
let DSA = [];
let PL = [];
let Networks = [];

// Function to display subject selection menu
function selectSubject() {
  console.log("Select a subject:");
  console.log("(A) DSA");
  console.log("(B) PL");
  console.log("(C) Networks");
  let subjectChoice = prompt("Enter your choice (A, B, or C): ");
  switch (subjectChoice.toUpperCase()) {
    case "A":
      currentSubject = DSA;
      break;
    case "B":
      currentSubject = PL;
      break;
    case "C":
      currentSubject = Networks;
      break;
    default:
      console.log("Invalid choice. Please try again.");
      selectSubject();
  }
  operationsMenu();
}

// Function to display operations menu
function operationsMenu() {
  console.log("Select an operation:");
  console.log("(A) Enroll");
  console.log("(B) Unenroll");
  console.log("(C) Select Another Subject");
  console.log("(D) Exit");
  let operationChoice = prompt("Enter your choice (A, B, C, or D): ");
  switch (operationChoice.toUpperCase()) {
    case "A":
      enrollStudent();
      break;
    case "B":
      unenrollStudent();
      break;
    case "C":
      selectSubject();
      break;
    case "D":
      exitProgram();
      break;
    default:
      console.log("Invalid choice. Please try again.");
      operationsMenu();
  }
}

// Function to enroll a student
function enrollStudent() {
  let studentName = prompt("Enter the name of the student to enroll: ");
  currentSubject.push(studentName);
  console.log(`Student ${studentName} enrolled in ${currentSubject === DSA ? "DSA" : currentSubject === PL ? "PL" : "Networks"}.`);
  operationsMenu();
}

// Function to unenroll a student
function unenrollStudent() {
  if (currentSubject.length === 0) {
    console.log("No students enrolled in this subject.");
  } else {
    console.log("Currently enrolled students: ");
    for (let i = 0; i < currentSubject.length; i++) {
      console.log(`${i + 1}. ${currentSubject[i]}`);
    }
    let studentIndex = prompt("Enter the number of the student to unenroll: ");
    if (studentIndex >= 1 && studentIndex <= currentSubject.length) {
      let studentName = currentSubject.splice(studentIndex - 1, 1)[0];
      console.log(`Student ${studentName} unenrolled from ${currentSubject === DSA ? "DSA" : currentSubject === PL ? "PL" : "Networks"}.`);
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
  operationsMenu();
}

// Function to exit the program
function exitProgram() {
  console.log("Enrolled students per subject: ");
  console.log(`DSA: ${DSA.join(", ")}`);
  console.log(`PL: ${PL.join(", ")}`);
  console.log(`Networks: ${Networks.join(", ")}`);
}

let currentSubject;
selectSubject();