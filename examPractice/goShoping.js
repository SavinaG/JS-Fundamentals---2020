function goShoping(array){
    let shopingList = array.shift().split("!");

    for (let i = 0; i < array.length; i++) {
        let toDo = array[i].split(" ");
        let wifeCommand = toDo[0];
        let item = toDo[1];
        if(wifeCommand == "Urgent"){
            if(shopingList.includes(item) === false){
                shopingList.unshift(item);
            }
        }else if(wifeCommand == "Unnecessary"){
            if(shopingList.includes(item)){
                shopingList.splice(shopingList.indexOf(item), 1);
            }
        }else if(wifeCommand == "Correct"){
            let newItem = toDo[2];
            if(shopingList.includes(item)){
                let oldItem = shopingList.indexOf(item)
                shopingList.splice(oldItem, 1, newItem); 
            }
        }else if(wifeCommand == "Rearrange"){
            if(shopingList.includes(item)){
                shopingList.splice(shopingList.indexOf(item), 1); 
                shopingList.push(item);
            }
        }else if(wifeCommand == "Go"){
            console.log(shopingList.join(", "));
            break;
        }
        
    }

}

goShoping([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
  )