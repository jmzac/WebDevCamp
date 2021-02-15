function fibonacciGenerator (n) {

    var output = [0];
     var i = 2;
    
    if (n === 1){
        return output; 
    }
    else if (n === 2){
        output.push(1);
    }
    else {
        output.push(1);
        while (i < n)
        {   output.push(output[i-2]+output[i-1]);
            i++;
            }
        }
     
     return output;
    
    
    }
