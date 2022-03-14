export function romanToInteger(str) {
    let result = 0;
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length - 1; i++) {
        if (map[str.charAt(i)] < map[str.charAt(i + 1)]) {
            result -= map[str.charAt(i)];
        } else {
            result += map[str.charAt(i)];
        }
    }
    result += map[str.charAt(str.length - 1)];
    return result;
}
