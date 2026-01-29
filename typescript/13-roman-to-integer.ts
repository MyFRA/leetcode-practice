function romanToInt(s: string): number {
    const mapRomanVal = new Map();
    const mapRomanParam = new Map();

    const arrValues: number[] = [];

    mapRomanVal.set("I", 1);
    mapRomanVal.set("V", 5);
    mapRomanVal.set("X", 10);
    mapRomanVal.set("L", 50);
    mapRomanVal.set("C", 100);
    mapRomanVal.set("D", 500);
    mapRomanVal.set("M", 1000);

    s.split("").forEach((e, i) => {
        mapRomanParam.set(i, mapRomanVal.get(e));

        if (mapRomanParam.get(i - 1) < mapRomanVal.get(e)) {
            arrValues.push(mapRomanVal.get(e) - mapRomanParam.get(i - 1));

            arrValues.splice(arrValues.length - 2, 1);
        } else {
            arrValues.push(mapRomanVal.get(e));
        }
    });

    return arrValues.reduce((prev, curr) => (prev += curr), 0);
}

console.log(romanToInt("MCMXCIV"));
