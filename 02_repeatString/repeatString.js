const repeatString = function(string, repeats) {
    let placeholder = "";
    if (repeats < 0)
        return "ERROR";
    for(let i = 1; i <= repeats; i++) {
        placeholder += string;
    }
    return placeholder;
};

// Do not edit below this line
module.exports = repeatString;
