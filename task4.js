// Change the score below to test. Previous runs are commented out.
// let score = 73;  // Output: Score: 73 | Grade: A — Distinction
// let score = 65;  // Output: Score: 65 | Grade: B — Merit
// let score = 52;  // Output: Score: 52 | Grade: C — Pass
// let score = 44;  // Output: Score: 44 | Grade: D — Near Pass
let score = 28;     // Output: Score: 28 | Grade: F — Fail

let grade;

if (score >= 70) {
  grade = "A — Distinction";
} else if (score >= 60) {
  grade = "B — Merit";
} else if (score >= 50) {
  grade = "C — Pass";
} else if (score >= 40) {
  grade = "D — Near Pass";
} else {
  grade = "F — Fail";
}

console.log(`Score: ${score} | Grade: ${grade}`);