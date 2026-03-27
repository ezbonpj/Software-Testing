let dup:String = "correspondence";  

let arr2:number[] = new Array(26).fill(0);
let ans:String ="";
for(let i =0;i<dup.length;i++){
    let chr = dup.charAt(i);
    arr2[chr.charCodeAt(0)-97] +=1;
} 
console.log(arr2);
for(let i=0;i<dup.length;i++){
    let chr = dup.charAt(i);
    if(arr2[chr.charCodeAt(0)-97]==1)
        ans +=chr;
}
console.log(ans);


