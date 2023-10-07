function hasTargetSum(array, target) {
  // Write your algorithm here
}
function hasTargetSum(arr, target) {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the pair of elements add up to the target
      if (arr[i] + arr[j] === target) {
        return true; // Found a pair that adds up to the target
      }
    }
  }
  
  // No pair found that adds up to the target
  return false;
}
/* 
  Write the Big O time complexity of your function here
*/
// The time complexity of the hasTargetSum function I provided is O(n^2), 
// where "n" is the number of elements in the input array. 
// This is because the function uses nested loops to compare each pair of elements in the array,
//  resulting in quadratic time complexity.
// In the worst case, where no pair of elements adds up to the target, 
// the function will iterate through all possible combinations of pairs, 
// resulting in O(n^2) comparisons.
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  1.We start by defining a function hasTargetSum that takes two parameters:
   arr (the array of integers) and target (the target integer).
   
 2.The function uses two nested loops to iterate through the array. The outer loop, controlled by the variable i,
    iterates from the beginning of the array to the second-to-last element.

  3.Inside the outer loop, we have another loop controlled by the variable j, which iterates from i + 1 to the end of the array. 
  This inner loop allows us to compare each element with all the elements that come after it.

  4.Within the inner loop, we check if the sum of the elements at indices i and j equals the target. 
  If this condition is met for any pair of elements, it means we have found a pair that adds up to the target.
  If such a pair is found, the function immediately returns true to indicate that there exists a pair of elements 
  in the array that adds up to the target.

  5.If no pair is found that adds up to the target after checking all combinations, 
  the function returns false to indicate that there is no such pair in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


