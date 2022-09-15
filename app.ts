function combine(n1: number | string | boolean, n2: number | string) {
    let result
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2
        return result
    } else {
        result = n1.toString() + n2.toString()
    }
    return result

}

const combinedAges = combine(30, 26);
console.log(combinedAges)

const combinedNames = combine("max", "Anna");
console.log(combinedNames)
