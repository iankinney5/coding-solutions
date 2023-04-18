function romanToInt(s) {

    // Map roman numeral values to integers
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // Initialize result value
    let result = 0;

    // loop through string and add to result
    for (i=0; i < s.length; i++){
        // grab current and next values
        const cur = sym[s[i]];
        const next = sym[s[i+1]];
        // if lesser number before next number, then subtract cur from next and add to result
        if (cur < next){
            result += next - cur
            i++
        } else {
            result += cur
        }
    }

    return result;
}

module.exports = romanToInt;