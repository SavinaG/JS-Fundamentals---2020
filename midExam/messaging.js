function solve(arr) {
    
    let array = []
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ')
        let command = line[0]
 
        if (command === 'Chat') {
            let message = line[1];
            array.push(message);
 
        }
        if (command == 'Delete') {
            let message = line[1];
            if (array.includes(message) == true) {
                let index = array.indexOf(message);
                array.splice(index, 1);
 
 
            }
        }
        if (command == 'Edit') {
            let toEdit = line[1];
            let edited = line[2];
 
            let indexOfToEdit = array.indexOf(toEdit);
 
            array.splice(indexOfToEdit, 1, edited);
        }
        if (command == 'Pin') {
            let message = line[1];
            let index = array.indexOf(message);
            let newM = array[index];
            array.splice(index, 1)
            array.push(newM);
 
        }
        if (command == 'Spam') {
            let message = line;
            for (let j = 1; j <= message.length - 1; j++) {
                array.push(message[j])
            }
        }
        if (command == 'end') {
            break;
        }
    }
 
 
    for (let message of array) {
        console.log(message)
    }
 
}
 
solve(["Chat John",
    "Spam let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"]);