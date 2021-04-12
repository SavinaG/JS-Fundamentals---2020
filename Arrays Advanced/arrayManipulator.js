function arrayManipulator(array, manipulator){
    

    for (let i = 0; i < manipulator.length; i++) {
        let commands = manipulator[i].split(" ");
        if(commands[0] === "add"){
            array.splice(+commands[1], 0, +(commands[2]));
        }else if(commands[0] === "addMany"){
            let newArr = commands.slice(2).map(Number);
            array.splice(+commands[1], 0, ...newArr);
        }else if(commands[0] === "contains"){
            console.log(array.indexOf(+(commands[1])));
        }else if(commands[0] === "remove"){
            array.splice(+commands[1], 1);
        }else if(commands[0] === "shift"){
            for (let j = 0; j < +commands[1]; j++) {
                let element = array.shift();
                array.push(element);
                
            }
        }else if(commands[0] === "sumPairs"){
            let tempArr = [];
            for (let h = 0; h < array.length; h+=2) {
              if(array[h + 1] !== undefined){
                  let sum = array[h] + array[h + 1];
                  tempArr.push(sum);
              }else{
                  tempArr.push(array[h]);
              }
                
            }
            array = tempArr
        }else{
            console.log(`[ ${array.join(", ")} ]`);
        }
        
    }
    

}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print'])
    /*arrayManipulator([1, 2, 3, 4, 5],
        ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])*/