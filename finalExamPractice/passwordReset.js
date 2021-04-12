function passwordReset(input){
    let passTodo = input.shift();
    
    let command = input.shift().split(" ");
    
    while(command[0] !== 'Done'){
        if(command[0] === 'TakeOdd'){
            let result = "";
            for (let key in passTodo) {
                if(key % 2 !== 0){
                    result += passTodo[key];
                }
            }
            passTodo = result
            console.log(passTodo);
        }
        else if(command[0] === "Cut"){
            let subStr = passTodo.substr(Number(command[1]), Number(command[2]));
            passTodo = passTodo.replace(subStr, '');
            console.log(passTodo);
        }else if(command[0] === 'Substitute'){
            if(passTodo.includes(command[1])){
                while(passTodo.includes(command[1])){
                    passTodo = passTodo.replace(command[1], command[2]);
                }
                console.log(passTodo);
            }else{
                console.log('Nothing to replace!');
            }
        }
        command = input.shift().split(" "); 
    }
    console.log(`Your password is: ${passTodo}`);
}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
  )