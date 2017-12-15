function navie_search(pattern, text) {
    let m = pattern.length;
    let n = text.length;

    for (let i = 0; i < n - m;i++) {
        let j = 0;

        for (; j < m; j++) {
            if (text[i + j] != pattern[j])
                break;
        }

        if (j === m)
            console.log('Pattren found at index - ', i);
    }
}

let txt = "AAAAAAAAAAAAAAAAAB";
let pat = "AAAB";
console.time('start');
navie_search(pat, txt);
console.timeEnd('start');
