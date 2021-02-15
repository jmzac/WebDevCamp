var output =[];

var count = 1;

function FizzBuzz (number){

    while(count<number){    
    if(count%3 === 0 && count%5 ===0){  
    output.push("FizzBuzz");}
    else
    if (count % 3 === 0){
    output.push("Fizz");}
    else
    if(count % 5 === 0)
    {
        output.push("Buzz");}
    else
       output.push(count);
    
    count++;
    }
 
    console.log(output);
}

var number = prompt("Enter a number limit:");

FizzBuzz(number);
