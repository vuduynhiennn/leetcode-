let isIsomorphic = function(s, t) {
    let arr = []
    for (let j = 0; j < s.length; j++) {
        arr.push((new Array(s[j], t[j])))
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][0] == arr[j][0]) {
                if (arr[i][1] != arr[j][1]) {
                    return false
                }
            }
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr.length - 2; j >= 0; j--) {
            if (arr[i][1] == arr[j][1]) {
                if (arr[i][0] != arr[j][0]) {
                    return false
                }
            }
        }
    }
    return true
};
console.log(isIsomorphic(s, t))