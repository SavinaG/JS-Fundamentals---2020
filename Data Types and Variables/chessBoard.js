function chesBoard(n){
    let size = Number(n);
    let currentColour = "black";
    let previusColour = "";
    console.log('<div class="chessboard">');

    for(let rows = 1; rows <= size; rows++){
        console.log('  <div>');

        for(let columns = 1; columns <= size; columns++){
            console.log(`    <span class="${currentColour}"></span>`);

            previusColour = currentColour;
            currentColour = previusColour === "black" ? "white" : "black"
        }
        console.log('  </div>');
        if(size % 2 === 0){
            previusColour = currentColour;
            currentColour = previusColour === "black" ? "white" : "black"
        }
    }
    console.log('</div>')
}
chesBoard(3);