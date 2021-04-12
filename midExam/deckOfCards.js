function deckOfCards(array){
    let colection = array.shift().split(", ");
    let commandCount = Number(array.shift());
    
    for (let i = 0; i < commandCount; i++) {
        let command = array[i].split(", ");
        if(command[0] === "Add"){
            let index = colection.indexOf(command[1])
            if(index == -1){
                colection.push(command[1]);
                console.log("Card successfully bought");
            }else{
                console.log("Card is already bought");
            }
        }else if(command[0] === "Remove"){
            let index = colection.indexOf(command[1]);
            if(index == -1){
                console.log("Card not found");
            }else{
                colection.splice(index, 1);
                console.log("Card successfully sold");
            }
        }else if(command[0] === "Remove At"){
            let index = Number(command[1]);
            if(index >= 0 && index < colection.length){
                colection.splice(index, 1);
                console.log("Card successfully sold");
            }else{
                console.log("Index out of range");
            }
        }else if(command[0] === "Insert"){
            let index = Number(command[1]);
            let indexOf = colection.indexOf(command[2]);
            if(index < 0 || index > colection.length){
                console.log("Index out of range");
            }else if(index >= 0 && index < colection.length && indexOf !== -1){
                console.log("Card is already bought");
            }else if(index >= 0 && index < colection.length && indexOf == -1){
                colection.splice(index, 0, command[2]);
                console.log("Card successfully bought");
            }
        }
        
    }
    console.log(colection.join(", "));

}
deckOfCards((["T-34-85 Rudy, SU-100Y, STG",
"3",
"Add, King Tiger(C)",
"Insert, 2, IS-2M",
"Remove, T-34-85 Rudy"]));
/*deckOfCards(["T 34, T 34 B, T92, AMX 13 57",
"4",
"Add, T 34",
"Remove, AMX CDC",
"Insert, 10, M60",
"Remove At, 1"])*/