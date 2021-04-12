function bonusScoringSystem(input){
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let allStudentsAtt = input.map(Number);
    let maxAtt = 0

    for (let element of allStudentsAtt) {
        if(element > maxAtt){
            maxAtt = element
        }
    }if(maxAtt !== 0 && lectures !== 0){
    let maxBonus = (maxAtt / lectures) * (5 + bonus);
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
    }
}

bonusScoringSystem([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]);