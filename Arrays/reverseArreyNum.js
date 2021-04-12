function reverseArrreyNum(count, nums){
    let result = ""

    for(let i = count - 1; i >= 0; i--){
        result += nums[i] + " ";
    }
    console.log(result);

}
reverseArrreyNum(3, [10, 20, 30, 40, 50])