function meetings(input){
    let shedule = {};

    for (let line of input) {
        let [day, name] = line.split(" ");
        if(shedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            console.log(`Scheduled for ${day}`);
            shedule[day] = name;
        }

    }
    for(let day in shedule){
        console.log(`${day} -> ${shedule[day]}`);
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);