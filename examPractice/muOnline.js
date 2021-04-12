function muOnline(input){
    let rooms = input.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomsCount = 0;

    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i].split(" ");
        let tokens = command[0];
        if(tokens === "potion"){
            let potion = command[1]
            if(health + potion > 100){
                health = 100;
                potion = 100 - health
            }else{
                health += potion
            }
        }else if(tokens === "chest "){
            let coins = command[1];
            bitcoins += coins;
        }
        
    }

    console.log(rooms);


}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');