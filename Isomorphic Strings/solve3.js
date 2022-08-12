var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    if (s === t) {
        return true;
    }
    const obj1 = {};
    const obj2 = {};
    for(let i = 0; i < s.length; i++) {
        const letter = s[i];
        const tLetter = t[i];
        if (!obj2[tLetter]) {
            obj2[tLetter] = letter;
        }
        if (!obj1[letter]) {
            obj1[letter] = tLetter;
        }
        if (obj1[letter] !== tLetter || obj2[tLetter] !== letter) {
            return false;
        }
    }
    return true;
};