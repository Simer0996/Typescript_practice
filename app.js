function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
        return result;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString()
    // }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedNumbers = combine("30", "26", "as-number");
console.log(combinedNumbers);
var combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
