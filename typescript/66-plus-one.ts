function plusOne(digits: number[]): number[] {
    for (let index = digits.length - 1; index >= 0; index--) {
        if (digits[index] + 1 != 10) {
            digits[index] = digits[index] + 1;
            break;
        } else {
            digits[index] = 0;
        }
    }

    if (digits[0] == 0) {
        digits.unshift(1);
    }

    return digits;
}

console.log(plusOne([1, 2, 3]));
