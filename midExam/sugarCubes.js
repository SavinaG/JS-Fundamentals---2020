function sugarCubes(array){
    let cubes = array.shift();
    
    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        if(command[0] === "Add"){
            cubes.push(Number(command[1]));
        }else if(command[0] === "Remove"){
            let index = cubes.indexOf(Number(command[1]));
            cubes.splice(index, 1);
        }else if(command[0] === "Replace"){
            let index = cubes.indexOf(Number(command[1]));
            cubes.splice(index, 1, command[2]);
        }else if(command[0] === "Collapse"){
            let value = Number(command[1]);
            cubes = cubes.filter(a => a >= value)
        }else if(command == "Mort"){
            console.log(cubes.join(" "));
        }
    }

}
sugarCubes([[1, 4, 5, 19, 13, 42, 69, 24],
    "Add 1",
    "Remove 4",
    "Replace 1 26",
    "Mort"]);
    sugarCubes([[2, -1, 0, -3, 9, 8, 7, 2],
        "Collapse 8",
        "Mort"])