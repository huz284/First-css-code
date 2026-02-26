let  num1 = 10;
let num2 = 5;
console.log("Addition:"+(num1 +num2));
console.log("subtraction:"+(num1 =num2));
console.log("Multiplication:"+(num1*num2));
console.log("Division:"+(num1/num2));

//second question
let celsius =30;
let fahenheit=(celsius*9/5);
console.log("celcius"+ celsius);
console.log("faherheit"+ fahenheit);
//3d question
let num =30;
if(Number %2 ===0){
    console.log("Even");}
    else{
        console.log("odd");
    }
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Fail");
}
//4th questiom
let voterAge = 20;

if (voterAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let tableNum = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

let students = ["Ali", "Sara", "Zain"];
let courses = ["Maths", "Science" , "urdu" ," english"];
for (let i = 0; i < students.length; i++) {
    console.log("Student: " + students[i]);

    for (let j = 0; j < courses.length; j++) {
        console.log("   Assigned Course: " + courses[j]);
    }
    
    console.log("--"); 
}