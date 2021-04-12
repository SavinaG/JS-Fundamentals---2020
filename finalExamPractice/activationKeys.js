function actKey(input){
    let key = input.shift();
    
    for (let line of input) {
        let command = line.split(">>>");
        if(command[0] === "Contains"){
            if(key.includes(command[1])){
                console.log(`${key} contains ${command[1]}`);
            }else{
                console.log("Substring not found!");
            }
        }else if(command[0] === "Flip"){
            let startI = Number(command[2]);
            let endI = Number(command[3]);
            if(command[1] === "Upper"){
                let cut = key.substring(startI, endI);
                key = key.replace(cut, cut.toUpperCase());
                console.log(key);
            }else{
                let cut = key.substring(startI, endI);
                key = key.replace(cut, cut.toLowerCase());
                console.log(key);
            }
        }else if(command[0] === "Slice"){
            let startI = Number(command[1]);
            let endI = Number(command[2]);
            let cut = key.substring(startI, endI);
                key = key.replace(cut, "");
                console.log(key);
        }else if(command === "Generate"){
            break
        }
    }
    console.log(`Your activation key is: ${key}`);
}
actKey([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]  
  )