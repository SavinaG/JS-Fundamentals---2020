function theLift2(array){
    let peopleCount = array[0];
    let wagonCount = array[1];
    let maxCapacity = 4;
    let fullWagons = [];
    wagonCount = wagonCount.split(" ").join("");
    let sum = 0;
    
    for(let i = 0; i < wagonCount.length; i++){
        let currentWagon = Number(wagonCount[i]);
        while(currentWagon < maxCapacity && peopleCount > 0){
            currentWagon += 1;
            peopleCount -= 1;
            sum += 1;
        }
        fullWagons.push(currentWagon);
    }
    let diff = (wagonCount.length * 4) - sum;
    if(diff > 0 && peopleCount == 0){
        console.log(`The lift has empty spots! 
        ${fullWagons.join(" ")}`);
    }else if(diff > 0 || peopleCount > 0){
        console.log(`There isn't enough space! ${peopleCount} people in a queue!
        ${fullWagons.join(" ")}`);
    }else{
        console.log(fullWagons.join(" "));
    }

}
 theLift2([
    "15",
    "0 0 0 0 0"
   ]);
   theLift2([
    "20",
    "0 2 0"
   ]);
   theLift2(["8", "0 0"]);
