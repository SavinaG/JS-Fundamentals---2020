function train(inputArr){
    let allWagons = inputArr.shift().split(" ").map(Number);
    let wagonCapacity = Number(inputArr.shift());

    for (let i = 0; i < inputArr.length; i++) {
        let element = inputArr[i].split(" ");
        if(element.length == 2){
            allWagons.push(Number(element[1]))
        }else{
            for(let j = 0; j < allWagons.length; j++) {
                let currentWagon = allWagons[j];
                let people = Number(element[0]);
                if(currentWagon + people <= wagonCapacity){
                    allWagons[j] += people;
                    break;
                }
            }
        }
    }

    console.log(allWagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])