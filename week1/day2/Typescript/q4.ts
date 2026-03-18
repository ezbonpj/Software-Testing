let q4: number[] = [2,1,3,4,5];
let temp:number=0;
for(let i=0;i<q4.length-1;i++){
    for(let j=0;j<q4.length-i-1;j++){
        if(q4[j]>q4[j+1]){
            temp = q4[j];
        q4[j] = q4[j+1];
        q4[j+1] = temp;
        }
    }
} 

console.log(q4);