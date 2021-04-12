function gladiatorInventory(array){
    let inventory = array.shift().split(" ")
    
    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        let token = command[0];
        if(token === "Buy"){
          if(inventory.includes(command[1]) === false){
              inventory.push(command[1]);
          }
        }else if(token === "Trash"){
            if(inventory.includes(command[1])){
                let index = inventory.indexOf(command[1]);
                inventory.splice(index, 1)
            }
        }else if(token === "Repair"){
            if(inventory.includes(command[1])){
                let index = inventory.indexOf(command[1]);
                inventory.splice(index, 1);
                inventory.push(command[1]);
            }
        }else if(token === "Upgrade"){
            let upgrade = command[1].split("-");
            if(inventory.includes(upgrade[0])){
                let index = inventory.indexOf(upgrade[0]);
                inventory.splice((index + 1), 0, (upgrade.join(":")))
            }
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])