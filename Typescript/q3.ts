let dup3:String = "correspondence";  

let arr3:number[] = new Array(26).fill(0);
let ans3:String ="";
for(let i =0;i<dup3.length;i++){
    let chr = dup3.charAt(i); 
    if(chr=="a"||chr=="e"||chr=="i"||chr=="o"||chr=="u")
    arr3[chr.charCodeAt(0)-97] +=1;
} 
console.log(arr3);
for(let i=0;i<dup3.length;i++){
    let chr = dup3.charAt(i);
      if(chr=="a"||chr=="e"||chr=="i"||chr=="o"||chr=="u")
    {if(arr3[chr.charCodeAt(0)-97]==1)
        ans3 +=chr; 
    }
    else
        ans3 +=chr;

}
console.log(ans3);


