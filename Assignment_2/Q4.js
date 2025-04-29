function sumOfDigitProducts(n1, n2) {
    
    let strN1 = n1.toString();
    let strN2 = n2.toString();

    let maxLength = Math.max(strN1.length, strN2.length);
    strN1 = strN1.padStart(maxLength, '0');
    strN2 = strN2.padStart(maxLength, '0');

    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(strN1[i]);
        let digit2 = parseInt(strN2[i]);
        sum += digit1 * digit2;
    }

    return sum;
}

let result = sumOfDigitProducts(6, 34);
console.log(result); 