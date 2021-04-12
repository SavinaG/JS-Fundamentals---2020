function vacation(groupCount, groupType, dayOfTheWeek){
    groupCount = Number(groupCount);
    let price = 0;

    if(dayOfTheWeek === "Friday"){
        if(groupType === "Students"){
            price = 8.45;
        }else if(groupType === "Business"){
            price = 10.90;
        }else if(groupType === "Regular"){
            price = 15;
        }
    }if(dayOfTheWeek === "Saturday"){
        if(groupType === "Students"){
            price = 9.80;
        }else if(groupType === "Business"){
            price = 15.60;
        }else if(groupType === "Regular"){
            price = 20;
        }
    }if(dayOfTheWeek === "Sunday"){
        if(groupType === "Students"){
            price = 10.46;
        }else if(groupType === "Business"){
            price = 16;
        }else if(groupType === "Regular"){
            price = 22.50;
        }
    }if(groupType === "Students" && groupCount >= 30){
        price *= 0.85;
    }else if(groupType === "Business" && groupCount >= 100){
        groupCount -= 10;
    }else if(groupType === "Regular" && groupCount >= 10 && groupCount <= 20){
        price *= 0.95;
    }
    let totalPrice = price * groupCount;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    )