// let nums = [2, 7, 11, 15]
let nums = [2,5,5,11]

let target = 10
let result = []

let twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+ 1; j < nums.length; j++) {
            let temp = nums[i] + nums[j]
            if (temp === target) {
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
}

console.log(twoSum(nums, target))