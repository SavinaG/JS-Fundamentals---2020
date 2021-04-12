function softUniReception(input){
    let totalStudents = Number(input.pop());
    let hours = 0;
    let studentsPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let answeredStudents = 0;


    while(answeredStudents < totalStudents){
        answeredStudents += studentsPerHour
        hours++
        if(hours % 4 === 0 && totalStudents !==0){
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

//softUniReception(['5','6','4','20']);
softUniReception(['3','2','5','40'])