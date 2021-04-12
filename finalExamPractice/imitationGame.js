function imitationGame(input){
    let msg = input.shift();

    let command = input.shift();

    while(command !== "Decode"){
        let [action, ...args] = command.split("|");
        if(action === 'ChangeAll'){
            while(msg.includes(args[0])){
                msg = msg.replace(args[0], args[1])
            }
        }else if(action === "Insert"){
            msg = msg.slice(0, Number(args[0])) + args[1] + msg.slice(Number(args[0]));
        }else if(action === "Move"){
            let subStr = msg.slice(0, Number(args[0]));
            msg = msg.slice(Number(args[0])) + subStr;
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${msg}`);
}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])