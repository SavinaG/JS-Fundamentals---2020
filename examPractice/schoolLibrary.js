function schoolLibrary(array = []){
    let bookShelf = array.shift().split("&");

    let token = array.shift().split(" | ");

    while(token != "Done"){
        let command = token[0];
        let bookOne = token[1];
        let bookTwo = token[2];
        if(command === "Add Book"){
            if(!(bookShelf.includes(bookOne))){
                bookShelf.unshift(bookOne);
            }
        }else if(command === "Take Book"){
            if(bookShelf.includes(bookOne)){
                let ind = bookShelf.indexOf(bookOne);
                bookShelf.splice(ind, 1);
            }
        }else if(command === "Insert Book"){
            bookShelf.push(bookOne);
        }else if(command === "Check Book"){
            if(bookShelf[Number(bookOne)] !== undefined) {
          
                console.log(bookShelf[Number(bookOne)]);
            }
        }else if(command === "Swap Books"){
            if(bookShelf.includes(bookOne) && bookShelf.includes(bookTwo)) {
                let indBookOne = bookShelf.indexOf(bookOne);
                let indBookTwo = bookShelf.indexOf(bookTwo);
                bookShelf.splice(indBookOne,1,bookTwo);
                bookShelf.splice(indBookTwo,1,bookOne)
            }
        }
        token = array.shift().split(" | ");
    }
    console.log(bookShelf.join(", "));
}

schoolLibrary([
  'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
  'Add Book | The Odyssey',
  'Take Book | Don Quixote',
  "Insert Book | Alice's Adventures in Wonderland",
  'Check Book | 3',
  'Done',
  '',
  '',
  ''
]
)