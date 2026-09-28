function consecutiveSubstrings(string) {

  const result = [];

  for (let i = 0; i < string.length; i++) {

    for (let j = i + 1; j <= string.length; j++) {

      const part = string.slice(i, j);

      result.push(part);

    }

  }

  return result;
}


// Big O is O(n^2)
// because i used a loop inside another loop


if (require.main === module) {

  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

}


module.exports = consecutiveSubstrings;