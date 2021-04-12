function pirates(input){
    let days = Number(input.shift());
    let plundersForDay = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let total = 0;
   for (let day = 1; day <= days; day++){
       total += plundersForDay;
       if(day%3 === 0){
           total += plundersForDay * 0.5;
       }
       if(day%5 === 0){
           total-= total * 0.3;
       }
   }
    if(total >= expectedPlunder){
        return `Ahoy! ${total.toFixed(2)} plunder gained.`
    }
    let percentage = total / expectedPlunder * 100;
        return `Collected only ${percentage.toFixed(2)}% of the plunder.`
}
 
console.log(pirates(['1', '30', '50']));
