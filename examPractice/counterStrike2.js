function counterStrike(input){
    let index = 0;
    let energy = Number(input[index]);
    index++
    let command = input[index];
    let battleWon = 0;

    while(command !== "End of battle"){
        let enemy = Number(command);
        if(energy >= enemy){
            energy -= enemy;
            battleWon++;
        }
        else{
            console.log(`Not enough energy! Game ends with ${battleWon} won battles and ${energy} energy`);
            return;
        }if(battleWon % 3 == 0){
            energy += battleWon;
        }
        index++;
        command = input[index];
    }
    console.log(`Won battles: ${battleWon}. Energy left: ${energy}`);
}

counterStrike([
    '100', '10', '10',
    '10',  '1',  '2',
    '3',   '73', '10'
  ])
  counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])