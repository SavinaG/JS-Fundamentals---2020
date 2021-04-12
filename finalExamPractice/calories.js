function adAstra(input){
    let regEx = /([#|\|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g
    let valid = input[0].match(regEx);
    let totalCal = 0;
    let food = {};

    if(valid){
    for (let line of valid) {
        let [name, date, cal] = line.split(line[0]).filter(x => x !== "");
        totalCal += Number(cal);
        food[name] = {date, cal}
    }
}
    totalCal /= 2000;
    
    console.log(`You have food to last you for: ${Math.trunc(totalCal)} days!`);

    Object.entries(food).forEach(element => {
        console.log(`Item: ${element[0]}, Best before: ${element[1].date}, Nutrition: ${element[1].cal}`);
    });
}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]

    )