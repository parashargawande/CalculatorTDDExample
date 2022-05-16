function add(numbers ="") {
    let numbersArray = numbers.split(/[,\n]+/)
    let negativeNos = []
    let sum = 0;
    numbersArray.forEach(no => {
        no = parseInt(no | 0)
        sum += no

        if (no < 0) negativeNos.push(no)
    });
    
    if(negativeNos.length > 0) throw new Error("negatives not allowed "+ negativeNos.join(" "))
    return sum;
}

module.exports = { add }