function archeryTournament(array){
    let target = array.shift().split("|").map(Number);
    let points = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        if(command[0] == "Shoot"){
            let action = command[1].split("@");
            if(action[0] == "Left" || action[0] == "Right" && action[1] > target.length){
                let index = Math.abs((action[1] - action[2]) % 10);
                let targetIndex = target[target.length - index];
                if(targetIndex >= 5 && targetIndex !== 0){
                    target[target.length - index] -= 5;
                    points += 5;
                }
            }
        }else if(command == "Reverse"){
            target = target.reverse();
        }else{
            console.log(target.join(" - "));
            console.log(`Iskren finished the archery tournament with ${points} points!`);
            break;
        }
        
    }  
    
}

archeryTournament([
    '20|30|40|50|60|70',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ]
  )