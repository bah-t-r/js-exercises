const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin === end) return end
    else if (begin > end) return NaN
    return begin + sequenceSum(begin + 1, end)
    // END
}
console.log(sequenceSum(1, 5)) // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)) // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)) // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
console.log(sequenceSum(7, 2)) // NaN

  