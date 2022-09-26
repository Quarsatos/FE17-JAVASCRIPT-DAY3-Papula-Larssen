
const student = ["John","Jane","Mary","Manuel","Heinz","Fred","Hans"];
const grades = [70,85,100,30,61,99,15];
var student_name = prompt("Enter your Name!")
let msg = document.getElementById("grade_text");

while(student_name === ""){
   student_name = prompt("Please Enter your name!");
} 

// if(!(student_name === student)){ //check again
//     // alert("Wrong Name!")
//     student_name = prompt("Please Enter a valid name!");    
// }

if(student_name != ""){
    name_exist = student.includes(student_name);
    if(name_exist){
        position = student.indexOf(student_name)
        grade = grades[position]
        setColor(grade)
        msg.textContent = student_name + " has reached " + grades[position] + " points in Math this season.";
    }
}

function setColor(grade){
    if(grade <=60){
        document.getElementById("grade_text").style.color = "red";
    }

    else if(grade >60 && grade <=70){
        document.getElementById("grade_text").style.color = "yellow";
    }

    else if(grade>70 && grade <= 99){
        document.getElementById("grade_text").style.color = "green";
    }

    else{
        document.getElementById("grade_text").style.color = "blue";
    }
}

