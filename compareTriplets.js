// You are given two arrays a and b, each containing three integers. Compare the corresponding elements:

// Alice gets 1 point if her rating is higher.
// Bob gets 1 point if his rating is higher.
// No points for a tie.
// Write a function compareTriplets(a, b) that returns an array [aliceScore, bobScore].

const a = [5, 6, 7]
const b = [3, 6, 10]

function compareTriplets(a, b) {
  let aliceScore = 0
  let bobScore = 0

  // Compare each category rating
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++
    } else if (a[i] < b[i]) {
      bobScore++
    }
  }

  return [aliceScore, bobScore]
}

console.log(compareTriplets(a, b))
