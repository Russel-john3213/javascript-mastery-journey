"use strict";
const STUDENTNAME = prompt("Insert Your Name:");
const AGE = +prompt("Enter Your Age:");
let enrolledCourse = +prompt("Insert How Many Enrolled Courses");
let math = 0;
let science = 0;
let history = 0;
let english = 0;

enrolledcourse: for (let i = 0; i <= enrolledCourse; i++) {
  math = +prompt("Input Your Grade Math", 0);
  if (math !== 0) {
    i += 1;
  }
  if (i == enrolledCourse) break;
  science = +prompt("Input Your Grade Science", 0);
  if (science !== 0) {
    i += 1;
  }
  if (i == enrolledCourse) break;
  history = +prompt("Input Your Grade History", 0);
  if (history !== 0) {
    i += 1;
  }
  if (i == enrolledCourse) break;
  english = +prompt("Input Your Grade english", 0);
  if (english !== 0) {
    i += 1;
  }
  if (i == enrolledCourse) break;
}
let totalGrade = math + science + history + english;
let averageGrade = totalGrade / enrolledCourse;

if (averageGrade <= 90) {
  alert(
    `You are ${STUDENTNAME}, ${AGE}, great Job you got an average of ${averageGrade} which is A`
  );
}
if (averageGrade <= 80) {
  alert(
    `You are ${STUDENTNAME}, ${AGE}, good job you got an average of ${averageGrade} which is B`
  );
}
if (averageGrade <= 75) {
  alert(
    `You are ${STUDENTNAME}, ${AGE}, nice try you got an average of ${averageGrade} which is C`
  );
}
if (averageGrade <= 60) {
  alert(
    `You are ${STUDENTNAME}, ${AGE}, you failed you got an average of ${averageGrade} which is D`
  );
}
if (averageGrade <= 50) {
  alert(
    `You are ${STUDENTNAME}, ${AGE}, STUPID MF you got an average of ${averageGrade} which is F`
  );
}
