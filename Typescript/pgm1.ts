let hour:number  = 9;
let  minute:number = 30;
let examtime:number = 9*60 + 30; 

let time_min:number = hour*60+minute;

if(time_min<examtime)
console.log("early");
else if(time_min==examtime)
    console.log("on time");
else
    console.log("late"); 

