const repeatString = function(string,num) {
    let repeat = '';
    for( i = 0; i < num; i++){
        repeat += string;
    }
    return repeat;
};


repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
