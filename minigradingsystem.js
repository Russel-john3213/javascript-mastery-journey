'use strict';
let studentName = prompt('Insert Your Name:');
let age = +prompt('Enter Your Age:');
let enrolledCourse = +prompt('Insert How Many Enrolled Courses');
let totalGrade = 0;
let averageGrade = 0;
let math = 0
let science = 0
let history = 0
let english = 0
let confirmation
if (age >= 14 && age <= 90){
    alert("Next");
        if (enrolledCourse == 4) {
        alert('Since you got all the courses, Please Proceed on putting your grades');
        math = +prompt('Put Your Math Grade:');
        science = +prompt('Put Your Science Grade:');
        history = +prompt('Put Your History Grade:');
        english = +prompt('Put Your English Grade:');
        totalGrade = math + science + history + english;
        averageGrade = totalGrade / 4  
            }else if(enrolledCourse == 3){
                let subConfirm1 = confirm("Are you enrolled in math?:");
                if (subConfirm1 == true){
                    math = +prompt("Enter Your Grade In Math");
                }
                let subConfirm2 = confirm("Are you Enrolled In Science?");
                if (subConfirm2 == true){
                    science = +prompt("Enter Your Grade In Science");
                }
                let subConfirm3 = confirm("Are you Enrolled In English");
                if (subConfirm3 == true){
                    english = +prompt("Enter Your Grade In English");
                }
                let subConfirm4 = confirm("Are you Enrolled In History?");
                if (subConfirm4 == true){
                    history = +prompt("Enter Your Grade In History");
                }
                if (subConfirm1 + subConfirm2 + subConfirm3 + subConfirm4 == 3){
                totalGrade = math + science + history + english;
                averageGrade = totalGrade / 3;
                }else {
                    alert("Stop the Cap");
                }
                    }else if(enrolledCourse == 2){
                        let subConfirm1 = confirm("Are you enrolled in math?:");
                        if (subConfirm1 == true){
                            math = +prompt("Enter Your Grade In Math");
                        }
                        let subConfirm2 = confirm("Are you Enrolled In Science?");
                        if (subConfirm2 == true){
                            science = +prompt("Enter Your Grade In Science");
                        }
                        let subConfirm3 = confirm("Are you Enrolled In English");
                        if (subConfirm3 == true){
                            english = +prompt("Enter Your Grade In English");
                        }
                        let subConfirm4 = confirm("Are you Enrolled In History?");
                        if (subConfirm4 == true){
                            history = +prompt("Enter Your Grade In History");
                        }
                        if (subConfirm1 + subConfirm2 + subConfirm3 + subConfirm4 == 2){
                        totalGrade = math + science + history + english;
                        averageGrade = totalGrade / 2;
                        }else {
                            alert("Stop the Cap");
                        }
                            }else if(enrolledCourse == 1){
                                let subConfirm1 = confirm("Are you enrolled in math?:");
                                if (subConfirm1 == true){
                                    math = +prompt("Enter Your Grade In Math");
                                }
                                let subConfirm2 = confirm("Are you Enrolled In Science?");
                                if (subConfirm2 == true){
                                    science = +prompt("Enter Your Grade In Science");
                                }
                                let subConfirm3 = confirm("Are you Enrolled In English");
                                if (subConfirm3 == true){
                                    english = +prompt("Enter Your Grade In English");
                                }
                                let subConfirm4 = confirm("Are you Enrolled In History?");
                                if (subConfirm4 == true){
                                    history = +prompt("Enter Your Grade In History");
                                }
                                if (subConfirm1 + subConfirm2 + subConfirm3 + subConfirm4 == 1){
                                totalGrade = math + science + history + english;
                                averageGrade = totalGrade / 1;
                                }else {
                                    alert("Stop the Cap");
                                }
                            }
                        }
if (averageGrade >= 90) {
    alert(`You are ${studentName} and your Average is ${averageGrade} which is A`);
}else if (averageGrade >= 80) {
    alert(`You are ${studentName} and your Average is ${averageGrade} which is B`);
}else if (averageGrade >= 70) {
    alert(`You are ${studentName} and your Average is ${averageGrade} which is C`);
}else if (averageGrade >= 60) {
    alert(`You are ${studentName} and your Average is ${averageGrade} which is D`);
}else if (averageGrade >= 50) {
    alert(`You are ${studentName} and your Average is ${averageGrade} which is YOU ARE A DUMBASS`);
}else {
    alert('Input Error');
}
