var grade;
var gpa;
age = window.prompt("Aapki umr kya hai?");
grade = window.prompt("Aap kis grade mein hain?");
gpa = window.prompt("Aapka GPA kya hai?");
if (age >= 17) {
  if (grade == 11 || grade == 12) {
    if (gpa >= 3.5) {
      window.alert("Aap scholarship ke liye eligible hain!");
    }
  }
}
