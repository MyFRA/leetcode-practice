function removeElement(nums: number[], val: number): number {
    const tempNums = nums.slice(0);
    let amountRemoved = 0;

    for (let index = 0; index < tempNums.length; index++) {
        const tempNum = tempNums[index];
        if (tempNum == val) {
            nums.splice(index - amountRemoved, 1);
            nums.push(tempNum);

            amountRemoved += 1;
        }
    }

    return nums.length - amountRemoved;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
