const palindromes = function (str) {
    let strReverse = str.split("").reverse().join("");
    if (strReverse === str) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
