function solve(input) {
    let string = input.shift();

    for (let i = 0; i < input.length; i++) {
        let [command, firstArg, secondArg] = input[i].split(' ');
        // console.log(command);
        switch (command) {
            case "Change":
                while (string.includes(firstArg)) {
                    string = string.replace(firstArg, secondArg);
                }
                console.log(string);
                break;
            case "Includes":
                if (string.includes(firstArg)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case "End":
                if (string.endsWith(firstArg)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case "Uppercase":
                string = string.toUpperCase();
                console.log(string);
                break;
            case "FindIndex":
                let indexNeeded = string.indexOf(firstArg);
                console.log(indexNeeded);
                break;
            case "Cut":
                indexStart = Number(firstArg);
                length = Number(secondArg);
                let cut = string.substring(indexStart, indexStart + length)
                    .split(' ')
                    .join(' ');
                console.log(cut);
                break;
            case "Done":
                break;
        }
    }
}
solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
])