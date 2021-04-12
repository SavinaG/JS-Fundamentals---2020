function employees(arr){
    let personalInfo = {};

    for (const input of arr) {
        personalInfo[input] = input.length;
    }
    Object.entries(personalInfo).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])