function phoneBook(input){
    let myBook = {};

    for (let list of input) {
        let [name, phone] = list.split(" ");
        myBook[name] = phone;
    }
    for (let name in myBook) {
        console.log(`${name} -> ${myBook[name]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])