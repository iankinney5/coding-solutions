function twoSum(nums, target) {
    for(let a = 0; a < nums.length; a++) {
        for(let b = 0; b < nums.length; b++) {
            if(a != b && nums[a] + nums[b] == target) {
                return [a,b]
            }
        }
    }
}

module.exports = twoSum;