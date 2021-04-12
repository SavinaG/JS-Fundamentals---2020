function houseParty(array){
    let guestList = [];

    for (let command of array) {
        command = command.split(" ");
        let name = command[0];
        if(command.includes("not")){
            if(guestList.includes(name)){
                guestList.splice(guestList.indexOf(name), 1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }else{
            if(guestList.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                guestList.push(name)
            }
        }
    }
    console.log(guestList.join(" " + "\n"));

}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])