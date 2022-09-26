// Exercise 1

let nums = [1, 7, -3, 9];
let highest = [];

for (i=0; i <= highest; i++){
    if (highest < nums[i]) {
        highest = nums[i];
    }
}

// let highest_1 = Math.max.apply(0, nums); // onliner wihtout loop

console.log(highest);
// console.log(highest_1 +" i m the onliner" );

// Exercise 2

let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("image");


function temperature(){
    let min = -5;
    let max = 40;
    let random = Math.floor(Math.random()*(max-min)+min);

    if (random <= 10){
        msg1.textContent =  "Temperatur "+ random +" °C";
        msg2.textContent =  "The weather is cold!";
        msg3 = document.getElementById("image").style.backgroundImage = "url('images/kalt.png')";
    } 

    else if(random <=15){
        
        msg1.textContent =  "Temperatur "+ random +" °C";
        msg2.textContent =  "The weather is moderate!";
        msg3 = document.getElementById("image").style.backgroundImage = "url('images/wolkig.png')";
    }

    else if(random <=25){
        
        msg1.textContent =  "Temperatur "+ random +" °C";
        msg2.textContent =  "The weather is warm!";
        msg3 = document.getElementById("image").style.backgroundImage = "url('images/sonne.png')";
    }

    else{
       
        msg1.textContent =  "Temperatur "+ random +" °C";
        msg2.textContent =  "The weather is hot!";
        msg3 = document.getElementById("image").style.backgroundImage = "url('images/temperatur.png')";
    }

}
console.log(temperature());

