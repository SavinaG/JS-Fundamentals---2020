function race(input){
    let names = input.shift().split(", ");
    let racers = {};
    names.forEach(name => {
        racers[name] = 0;
    });

    for (let line of input) {
        let regexName = /[A-Za-z]/g;
        let name = line.match(regexName).join("");
        if(racers.hasOwnProperty(name)){
            let regexDistance = /[0-9]/g;
            let digits = line.match(regexDistance)
            .map(Number)
            .reduce((a, b) => a + b);
            racers[name] += digits
        }
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )