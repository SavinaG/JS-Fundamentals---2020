function cooking(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceForflour = Number(input[2]);
    let priceForEgg = Number(input[3]);
    let priceForApron = Number(input[4]);
    let freePackages = students / 5;
    let eggsForOneStudent = priceForEgg * 10;
    total = priceForApron * (students + Math.ceil(students * 0.2)) + eggsForOneStudent * students + priceForflour * students;
 
    if (students >= 5) {
        total = priceForApron * (students + Math.ceil(students * 0.2)) + eggsForOneStudent * students + priceForflour * (students - freePackages);
    }
 
    if (total <= budget) {
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    } else {
        let neededMoney = total - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
}
cooking();