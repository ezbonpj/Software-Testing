let weight:number  = 80;
let  height:number = 1.58;
let bmi:number = weight/(height*height);



if(bmi<18.5)
console.log("under weight");
else if(bmi>=18.5 && bmi < 25)
    console.log("normal weight");
else if(bmi>=25 && bmi < 30)
    console.log("over weight");
else
    console.log("obesity"); 

