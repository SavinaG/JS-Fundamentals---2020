function extractFile(input){
    let index = input.lastIndexOf(".");
    let extension = input.substring(index + 1);
    let fileName = input.slice(input.lastIndexOf("\\") + 1, index);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')