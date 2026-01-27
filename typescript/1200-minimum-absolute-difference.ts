function minimumAbsDifference(arr: number[]): number[][] {
    const posibilities: number[][] = [];
    let minimumDistinct: number;
    let results: number[][] = [];

    arr.map((e) => Math.abs(e));
    arr.sort((a, b) => a - b);

    for (let index = 0; index < arr.length - 1; index++) {
        posibilities.push([arr[index], arr[index + 1]]);
    }

    posibilities.forEach((posibility) => {
        if (minimumDistinct == undefined) {
            minimumDistinct = posibility[1] - posibility[0];
            results = [[posibility[0], posibility[1]]];
        } else if (posibility[1] - posibility[0] < minimumDistinct) {
            results = [[posibility[0], posibility[1]]];
            minimumDistinct = posibility[1] - posibility[0];
        } else if (posibility[1] - posibility[0] == minimumDistinct) {
            results.push([posibility[0], posibility[1]]);
        }
    });

    return results;
}

console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
