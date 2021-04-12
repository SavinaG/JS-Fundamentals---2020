function fuelMoney(distance, pasengers, price){
    distance = Number(distance);
    pasengers = Number(pasengers);
    price = Number(price)
    let neededFuel = (distance / 100) * 7;
    neededFuel += pasengers * 0.100;
    let money = neededFuel * price;
    
    console.log(`Needed money for that trip is ${money}lv.`);

}
fuelMoney(90, 14, 2.88)