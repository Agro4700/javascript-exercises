const fibonacci = function(number) {
    let a = 0; 
    let b = 1; 
    let temp;

    if (number < 0){
        return "OOPS";
    }

    for (i = 1; i <= number; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
