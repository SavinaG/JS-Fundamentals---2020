function movingTarget(array){
    let targets = array.shift().split(" ").map(Number);

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        let action = (command[0]);
        let index = Number(command[1]);
        let power = Number(command[2]);
        if(action == "Shoot" && index >=0 && index < targets.length){
            targets[index] -= power;
            if(targets[index] <= 0){
                targets.splice(index, 1);
            }
        }else if(action == "Add"){
            if(index >=0 && index < targets.length){
            targets.splice(index, 0, power);
            }else{
                console.log(`Invalid placement!`);
            }
        }else if(action == "Strike"){
            if(index - power >= 0 && index + power < targets.length){
            targets.splice(index - power, power + power + 1);
            }else{
            console.log("Strike missed!");
            }
        } else if(action == "End"){
            console.log(targets.join("|")); 
        }
    }
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
   "Strike 2 1",
    "Add 22 3",
    "End"])