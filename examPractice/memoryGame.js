function memoryGame(array){
    let gameBoard = array.shift();
    let newBoard = gameBoard.split(" ").join("")
    let totalMoves = 0;
    let addBoard = newBoard.split("")
    let index = 0;
    let command = array[index];

    while(command !== "end"){
        let moves = command.split(" ");
        let firstMove = Number(moves[0]);
        let secondMove = Number(moves[1])


        if(firstMove == secondMove || firstMove < 0 || secondMove < 0 || firstMove >= newBoard.length || secondMove>= newBoard.length){
            totalMoves++
            let  newElement = "";
            newElement = "-" + totalMoves + "a";
            console.log(`Invalid input! Adding additional elements to the board`);
            let addElementIndex = (addBoard.length / 2);
            if(addBoard.length % 3 === 0){
                addElementIndex + 1;
            }
            addBoard.splice(addElementIndex, 0, newElement, newElement);
        }else if(addBoard[firstMove] == addBoard[secondMove]){
            totalMoves++
            console.log(`Congrats! You have found matching elements - ${addBoard[firstMove]}!`);
            addBoard.splice(firstMove, 1); 
            secondMove -= 1;
            if(secondMove < 0){
                secondMove = 0;
            }
            addBoard.splice(secondMove, 1);
        }else if(addBoard[firstMove] !== addBoard[secondMove]){
            totalMoves++;
            console.log(`Try again!`);
        }if(addBoard.length == 0) {
            console.log(`You have won in ${totalMoves} turns!`);
            break;
        }
        index++;
        command = array[index];
    }
    if(command == "end" && addBoard.length > 0){
    console.log(`Sorry you lose :(
        ${addBoard.join(" ")}`);      
    }
}

 memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])
   /* memoryGame([
        "a 2 4 a 2 4", 
        "0 3", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ])
       /* memoryGame([
            "a 2 4 a 2 4", 
            "4 0", 
            "0 2",
            "0 1",
            "0 1", 
            "end"
            ])*/