function heartDelivery(array){
    let deliveryAdress = array.shift().split("@").map(Number);
    let houseCount = 0;
    let curentIndex = 0;

    for (let i = 0; i < array.length; i++) {
        let jump = array[i].split(" ");
        let command = jump[0]
        if(command == "Love!"){
            console.log(`Cupid's last position was ${curentIndex}.`);
            if(houseCount == deliveryAdress.length){
                console.log("Mission was successful.");
            }else{
                console.log(`Cupid has failed ${deliveryAdress.length - houseCount} places.`);
            }
        }
        let index = Number(jump[1]);
        curentIndex += index;
        if(curentIndex > deliveryAdress.length - 1){
            curentIndex = 0;
        }if(deliveryAdress[curentIndex] == 0){
            console.log(`Place ${curentIndex} already had Valentine's day.`);
        }else if(deliveryAdress[curentIndex] !== 0){
            deliveryAdress[curentIndex] -= 2;
            if(deliveryAdress[curentIndex] == 0){
                console.log(`Place ${curentIndex} has Valentine's day.`);
                houseCount ++;
            }
        }
    }

}

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])