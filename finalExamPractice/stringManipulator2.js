function solve(input) {
    let string = input.shift();

    for (let i = 0; i < input.length; i++) {
        let [command, firstArg, secondArg] = input[i].split(' ');
        // console.log(command);
        switch (command) {
            case "Translate":
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
            case "Start":
                if (string.startsWith(firstArg)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case "Lowercase":
                string = string.toLowerCase();
                console.log(string);
                break;
            case "FindIndex":
                let indexNeeded = string.lastIndexOf(firstArg);
                console.log(indexNeeded);
                break;
                case "Remove":
                    indexStart = Number(firstArg);
                    count = Number(secondArg);
                    let first = string.substring(0, indexStart);
                    let second = string.substring(indexStart + count);
                    string = first + second;
                    console.log(string);
                    break;
            case "End":
                break;
        }
    }
}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
])