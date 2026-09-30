
let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// parseInt() because age must be a whole number; it drops any decimals
studentAge = parseInt(studentAge);
console.log("studentAge:", studentAge, "| type:", typeof studentAge);

// parseFloat() because the exam score has a decimal part that must be kept
examScore = parseFloat(examScore);
console.log("examScore:", examScore, "| type:", typeof examScore);

// Number() converts the whole string strictly into a number (works for ints and decimals)
passMark = Number(passMark);
console.log("passMark:", passMark, "| type:", typeof passMark);

// String() because a name should be text, even if it arrived as a number
studentName = String(studentName);
console.log("studentName:", studentName, "| type:", typeof studentName);

console.log("examScore > passMark:", examScore > passMark); // true