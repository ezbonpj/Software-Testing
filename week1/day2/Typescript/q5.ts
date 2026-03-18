let dup5:String = "correspondence";  

let arr5:number[] = new Array(26).fill(0);
let ans5:String ="";
for(let i =0;i<dup5.length;i++){
    let chr = dup5.charAt(i); 
    if(chr=="a"||chr=="e"||chr=="i"||chr=="o"||chr=="u")
    arr5[chr.charCodeAt(0)-97] +=1;
} 
console.log(arr5);
for(let i=0;i<dup5.length;i++){
    let chr = dup5.charAt(i);
      if(chr=="a"||chr=="e"||chr=="i"||chr=="o"||chr=="u")
    {if(arr5[chr.charCodeAt(0)-97]==1)
        ans5 +=chr; 
    }
    

}
console.log(ans5);


