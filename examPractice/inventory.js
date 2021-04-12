function inventory(array){
    let items = array.shift().split(", ");

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" - ");
        if(command[0] == "Collect"){
            if(!items.includes(command[1])){
                items.push(command[1]);
            }
        }else if(command[0] == "Drop"){
            if(items.includes(command[1])){
                items.splice((items.indexOf(command[1])), 1)
            }    
        }else if(command[0] == "Combine Items"){
            let combine = command[1].split(":");
            if(items.includes(combine[0])){
                items.splice((items.indexOf(combine[0]) + 1), 0, (combine[1]));
            }
        }else if(command[0] == "Renew"){
            if(items.includes(command[1])){
                items.splice((items.indexOf(command[1])), 1);
                items.push(command[1]);
            }
        }else if(command == "Craft!"){
            console.log(items.join(", "));
        }
    }
}

//inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])