function secretChat(input){
    let originalMsg = input.shift();

    let commands = input.shift();

    while(commands != "Reveal"){
        let tokens = commands.split(":|:");
        if(tokens[0] == "ChangeAll"){
            while(originalMsg.includes(tokens[1])){
                originalMsg = originalMsg.replace(tokens[1], tokens[2]);
            }
            console.log(originalMsg);
        }else if(tokens[0] == "InsertSpace"){
            let index = Number(tokens[1]);
            originalMsg = originalMsg.substring(0, index) + " " + originalMsg.substring(index, originalMsg.length);
            console.log(originalMsg);
        }else if(tokens[0] == "Reverse"){
            if(originalMsg.includes(tokens[1])){
                let reversed = originalMsg.substr(originalMsg.indexOf(tokens[1]), tokens[1].length);
                reversed = reversed.split("").reverse().join("");
                originalMsg = originalMsg.replace(tokens[1], "");
                originalMsg = originalMsg + reversed;
                console.log(originalMsg);
            }else{
                console.log('error');
            }
        }
        commands = input.shift();
    }

    console.log(`You have a new text message: ${originalMsg}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])