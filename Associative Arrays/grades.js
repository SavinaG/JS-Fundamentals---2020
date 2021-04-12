function grades(input){
    let students = new Map();

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if(!students.has(name)){
            students.set(name, []);
        }
        let existing = students.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    function compareAverage([nameA, gradeA], [nameB, gradeB]){
        let avrA = 0;
        gradeA.forEach(x => avrA += x) 
        avrA /= gradeA.length; 
        
        let avrB = 0;
        gradeB.forEach(x => avrB += x) 
        avrB /= gradeB.length;

        return avrA - avrB;
    }
    let sorted = Array.from(students);
    sorted.sort(compareAverage);

    for(let [name, grade] of sorted){
        console.log(`${name}: ${grade.join(", ")}`);
    }
}
grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);