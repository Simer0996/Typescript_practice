type combinable = number | string
type conversionDescription = 'as-number' | 'as-text'


function combine(n1: combinable, n2: combinable, resultConversion: conversionDescription) {
    let result
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2
        return result
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
    // if (resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString()
    // }


}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges)

const combinedNumbers = combine("30", "26", "as-number");
console.log(combinedNumbers)

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames)
