let nums = [1, 2, 4, 5, 10]
// let result = [1, 3, 6, 9, 15]

let runningSum = (nums) => {
    let result = []
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i]
        result.push(temp)
    }
    return result
}

console.log(runningSum(nums))