module.exports = function multiply(first, second) {
    let resultArray = new Array(first.length + second.length);
    let firstArray = first.split("");
    let temp = second.split("").reverse();

    resultArray.fill(0);

    for (let i = 0; temp.length != 0; i++) {
        let k = temp.pop();
        for (let j = 0; j < firstArray.length; j++) {
            resultArray[i + j] += firstArray[j] * k;
        }
    }

    if (resultArray[resultArray.length - 1] === 0) {
        resultArray.pop();
    }

    for (let i = resultArray.length - 1; i > 0; i--) {
        if (Math.floor(resultArray[i] / 10) > 0) {
            resultArray[i - 1] += Math.floor(resultArray[i] / 10);
            resultArray[i] = resultArray[i] % 10;
        }
    }

    return resultArray.join("");
}
