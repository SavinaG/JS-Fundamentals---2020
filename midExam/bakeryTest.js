function BiscuitFac(bisPDayPworker, workers, competitor){
 
    let MountlyBis=0;
     
        for (let i = 0; i < 30; i++) {
           
           // console.log(day);
            let dayly= Number(bisPDayPworker)*Number(workers);
            if(i % 3 === 0){
                //console.log(day);
                let weakday = dayly*25/100;
                dayly-=weakday;
            }
            MountlyBis +=dayly; 
        }
            console.log(`You have produced ${Number(MountlyBis)} biscuits for the past month.`);
        let diff = MountlyBis-Number(competitor);
        let percent = Math.abs(diff)/competitor*100;
        if(MountlyBis>competitor){
            console.log(`You produce ${Number(percent.toFixed(2))} percent more biscuits.`);
        }else{
            console.log(`You produce ${Number(percent.toFixed(2))} percent less biscuits.`);
        }
    }
    BiscuitFac((78, 8, 16000));