function pianist(input){
    let n = input.shift();
    let colection = {};

    for (let i = 0; i < n; i++) {
        let [song, name, type] = input.shift().split("|");
        colection[song] = {name, type};
    }
    let command = input.shift();

    while(command !== "Stop"){
        let [action, ...args] = command.split("|");
        if(action == "Add"){
            if(colection.hasOwnProperty(args[0])){
                console.log(`${args[0]} is already in the collection!`);
            }else{
                colection[args[0]] = {name: args[1], type: args[2]};
                console.log(`${args[0]} by ${args[1]} in ${args[2]} added to the collection!`);
            }
        }else if(action == "Remove"){
            if(colection.hasOwnProperty(args[0])){
                delete colection[args[0]];
                console.log(`Successfully removed ${args[0]}!`);
            }else{
                console.log(`Invalid operation! ${args[0]} does not exist in the collection.`);
            }
        }else if(action == "ChangeKey"){
            if(colection.hasOwnProperty(args[0])){
                colection[args[0]] = {name: colection[args[0]].name,type: args[1]};
                console.log(`Changed the key of ${args[0]} to ${args[1]}!`);
            }else{
                console.log(`Invalid operation! ${args[0]} does not exist in the collection.`);
            }
        }
        command = input.shift();
    }
    let sorted = Object.entries(colection).sort((a, b) =>
        a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])
    )
    sorted.forEach(element => {
        console.log(`${element[0]} -> Composer: ${element[1].name}, Key: ${element[1].type}`);
    });
}
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ])