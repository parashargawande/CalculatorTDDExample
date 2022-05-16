function add(numbers ="") {
    let numbersArray = numbers.split(/[,]+/)
    let sum = 0;
    numbersArray.forEach(no => {
        no = parseInt(no | 0)
        sum += no
    });
    return sum;
}

module.exports = { add }