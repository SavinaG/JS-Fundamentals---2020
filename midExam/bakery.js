function bakery(arr1, arr2,arr3) {
    let biscuitsPerDay = Number(arr1);
    let numOfWorkers = Number(arr2);
    let competingFactoryBisPerMonth = Number(arr3);
    let biscuitsOfAllWorkersPerDay = biscuitsPerDay * numOfWorkers;
   let result = 0;
 
 for (let i = 0; i < 30; i++) {
        if (i % 3 === 0) {
        let reducedBiscuits =(biscuitsOfAllWorkersPerDay * 0.75);
        let minBisc = Math.floor(reducedBiscuits);
            result +=minBisc;
        } else {
            result += biscuitsOfAllWorkersPerDay
        }
    }
    console.log(`You have produced ${result} biscuits for the past month.`)
 
    if (result > competingFactoryBisPerMonth) {
        let diff =(result - competingFactoryBisPerMonth);
        let percentage = (diff / competingFactoryBisPerMonth) * 100;
     console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    } else { 
        let diff =(result - competingFactoryBisPerMonth);
        let percentage =Math.abs ((diff / competingFactoryBisPerMonth) * 100);
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
 
    }
 
}

bakery((65, 12, 26000));