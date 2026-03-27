let dup5: string = "cezbon";

let arr5: number[] = new Array(26).fill(0);
let ans5: string = "";

for (let i = 0; i < dup5.length; i++) {
    let chr = dup5.charAt(i);
    if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
        let index = chr.charCodeAt(0) - 97;
        arr5[index]++;
    }
}

console.log(arr5);

for (let i = 0; i < dup5.length; i++) {
    let chr = dup5.charAt(i);
    if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
        let index = chr.charCodeAt(0) - 97;
        if (arr5[index] == 1) {
            ans5 += chr;
        }
    }
}

console.log(ans5);