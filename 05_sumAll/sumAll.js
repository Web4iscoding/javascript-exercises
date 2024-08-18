const sumAll = function(lower, upper) {
    let sum = 0;
    if (lower < 0 || upper < 0 || typeof lower !== "number" || typeof upper !== "number" || Math.floor(lower) != lower || Math.floor(upper) != upper) {
        return "ERROR";
    }
    
    if (lower < upper) {
        for (let i = lower; i <= upper; i++) {
            sum += i;
        }
    }
    else {
        for (let i = upper; i <= lower; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
