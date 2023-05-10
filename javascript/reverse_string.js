function reverseString(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Normally, I would use a built-in function that uses the split, reverse, and join methods chained together
// For this, I use a for loop.

//In line 2, I declare a variable called revString and set it equal to an empty string.
// Line 4 is the start of the for loop. The loop initializes at the index of the last character in the string (let i = str.length - 1)
    // Then, I set the condition to i >= 0, which meaans this will iterate as long as i is >= 0.
    // Next, the loop decrements with each iteration. (i--)
// In line 5, I'm appending each character in the string to revString in reverse order.
// Lastly, in line 7, I am returning the revString variable.