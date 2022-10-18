const palindromes = function (string) {
    let array = string.split('');

    let reverseArray = array.reverse();

    let reverseString = reverseArray.join('');

    if(string.toLowerCase().replace(/[\W]/g,"") == reverseString.toLowerCase().replace(/[\W]/g,"")){
        console.log(reverseString);
        console.log(string);
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
