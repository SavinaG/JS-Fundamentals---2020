function santaGifts(input){
    let moves = Number(input.shift());
    let houses = input.shift().split(" ");
    let position = 0;

    for (let i = 0; i < moves; i++) {
        let command = input[i].split(" ");
        if(command[0] == "Forward"){
            let index = Number(command[1]);
            let curentIndex = position + index
            if(curentIndex >= 0 && curentIndex < houses.length){
                houses.splice(curentIndex, 1);
                position = curentIndex;
            }
        }else if(command[0] == "Back"){
            let index = Number(command[1]);
            let curentIndex = position - index
            if(curentIndex >= 0 && curentIndex < houses.length){
                houses.splice(curentIndex, 1);
                position = curentIndex;
            }
        }else if(command[0] == "Gift"){
            let index = Number(command[1]);
            let gift = Number(command[2])
            if(index >= 0 && index < houses.length){
                houses.splice(index, 0, gift);
                position = index;
            }
        }else if(command[0] == "Swap"){
            let first = (command[1]);
            let second = (command[2]);
            let indexOne = houses.indexOf(first);
            let indexTwo = houses.indexOf(second);
            if(indexOne !== -1 && indexTwo !== -1){
                houses.splice(indexOne, 1, second);
                houses.splice(indexTwo, 1, first);
            }
        }
        
    }
    console.log(`Position: ${position}`);
    console.log(houses.join(", "));
}
santaGifts([
    '6',
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1'
  ]
  
  )