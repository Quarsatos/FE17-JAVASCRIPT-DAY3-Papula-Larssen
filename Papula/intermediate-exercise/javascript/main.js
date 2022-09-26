
let students = [["Martin",76],["Thomas",85],["Klaus",65],["Maria",93],["David",81]];

let averagemarks = 0;
let names = [];
var grades = [];
let average = 0;

// for(i=0; i < students.length; i++){
//     names += students[i][0];
        
// }

// for ( i = 0; i < students.length; i++){
//     var grades = {};
//     grades = students[i][1];
//     data.push(grades);
// }
// return data;


// console.log(names)
// console.log(grades)


// for(i=0; i < students.length; i++){
//     names += students[i][0];
// }
// console.log(names);

for(i=0; i < students.length; i++){
    averagemarks += students[i][1];
}
    average = (averagemarks/students.length)
    console.log("All points from class " + averagemarks)
    console.log("Average points from class " + average)
    
    if(average <= 60)
        console.log("Class grade is F")

    else if(average <= 70)
        console.log("Class grade is D")
    
    else if(average <= 80)
        console.log("Class grade is C")
    
    else if(average <= 90)
        console.log("Class grade is B")
    
    else if(average <= 100)
        console.log("Class grade is A");

// Exercise 2

for(i=1; i <= 100; i++){
    if (i % 15 == 0)console.log("FizzBuzz");
    else if (i % 5 == 0)console.log("Buzz");
    else if (i % 3 == 0)console.log("Fizz");   
    else console.log(i);
}

// Exercise 3

for(i=1; i <=6; i++){
    for(j=1; j <= i; j++){
        document.write("*")
    }
document.write("<br/>")
}



