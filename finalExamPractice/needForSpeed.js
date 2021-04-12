function needForSpeed(input){
    let actions = {
        Drive: (colection, [car, distance, fuel]) => {
            distance = Number(distance);
            fuel = Number(fuel);
            let current = colection[car];
            if(current.fuel >= fuel){
                current.fuel -= fuel;
                current.mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if(current.mileage >= 100000){
                    console.log(`Time to sell the ${car}!`);
                    delete colection[car];
                }
            }else{
                console.log("Not enough fuel to make that ride");
            }
        },
        Refuel: (colection, [car, fuel]) => {
            fuel = Number(fuel);
            let current = colection[car];
            if(current.fuel + fuel > 75){
                fuel = 75 - current.fuel;
            }
            current.fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        },
        Revert: (colection, [car, kilometers]) => {
            kilometers = Number(kilometers);
            let current = colection[car];
            current.mileage -= kilometers;
            if(current.mileage < 10000){
                current.mileage = 10000;
            }else{
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    let carCount = input.shift();
    let colection = {};

    for(let i = 0; i < carCount; i++){
        let [carModel, mileage, fuel] = input.shift().split("|");
        colection[carModel] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }
    while(input[0] !== "Stop"){
        let [command, ...args] = input.shift().split(" : ");
        let action = actions[command];
        action(colection, args);
    }
    let sorted = Object
        .entries(colection)
        .sort(compareCars);

        for(let cars of sorted){
            console.log(`${cars[0]} -> Mileage: ${cars[1].mileage} kms, Fuel in the tank: ${cars[1].fuel} lt.`);
        }

    function compareCars(a, b){
        let carA = a[1];
        let carB = b[1];
        let result = carB.mileage - carA.mileage;
        if(result == 0){
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])