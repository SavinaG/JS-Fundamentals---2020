function ladybugs(array){
    let bugsField = array.shift();
    let bugsStartIndex = array.shift().split(" ").map(Number)
    let newField = [];
    let index = 0;
    
    
    while(newField.length !== bugsField){
        newField.splice(array[index]);
        index++
    }

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(" ");
        let bugToflyIndex = Number(element[0]);
        let wayToFly = element[1];
        let newIndex = Number(element[2]);
        newField.push()
    }
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);