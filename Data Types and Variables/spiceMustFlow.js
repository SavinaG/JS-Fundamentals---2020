function spiceMustFlow(spice){
    spice = Number(spice);
    let dayCount = 0;
    let harvest = 0;

    while(spice >= 100){
        harvest += spice - 26;
        spice -= 10;
        dayCount++
    }
        if(spice < 100 && dayCount == 0){
    console.log(dayCount);
    console.log(harvest);
        }else{
            harvest -= 26;
            console.log(dayCount);
    console.log(harvest);

        }
}
spiceMustFlow(111)