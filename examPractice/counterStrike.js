function counterStrike(input){
    let initialEnergy = Number(input[0])
    let index = 1;
    let battlesWon = 0;

    while(initialEnergy >= 0){
        let enemy = input[index++];
        if(enemy == "End of battle"){
            break;
        }else{
            enemy = Number(enemy)
        }if(initialEnergy >= enemy){
            battlesWon++;
            initialEnergy -= enemy;
        }else{
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${initialEnergy} energy`);
            return;
        }if(battlesWon % 3 == 0){
            initialEnergy += battlesWon;
        }
    }
    console.log(`Won battles: ${battlesWon}. Energy left: ${initialEnergy}`);
}

counterStrike([
    '100', '10', '10',
    '10',  '1',  '2',
    '3',   '73', '10'
  ])
  /*counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])*/