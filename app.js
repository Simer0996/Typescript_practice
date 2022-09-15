function combine(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
        return result;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("max", "Anna");
console.log(combinedNames);
