const repeatString = function (string, num) {

    if (num < 0) {
        return 'ERROR';
    } 
    
    let greet = '';

    for (let i = 0; i < num; i++) {
            greet += string;
    }
    return greet;
}

// Do not edit below this line
module.exports = repeatString;
