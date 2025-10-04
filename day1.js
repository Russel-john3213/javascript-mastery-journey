"use strict";
const STUDENTNAME = prompt("Insert Your Name:");
const AGE = +prompt("Enter Your Age:");
let enrolledCourse = +prompt("Insert How Many Enrolled Courses");
let totalGrade = 0;
let averageGrade = 0;
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
