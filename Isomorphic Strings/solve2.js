let s = 'abcdd'
let t = 'cleac'
function isomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < s.length; i++) {
        var a = s[i]; 
        var b = t[i];
        console.log(map[a])
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // check for error in first tuple ("ABB", "XYZ")
        } else if (map[a] !== b) {
            return false;
        }

        // check for error in second tuple ("ABC", "XYY")
        for (var key in map) {
            if (key !== a && b === map[key]) {
                return false;
            }
        }
    }
    return true;
}

isomorphic(s, t)