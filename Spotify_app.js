//Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s,t) {
  let counter = {};
  let sortedString = "";
  
  for (let char of s) {
    counter[char]? counter[char]++ : counter[char] = 1;
  }
  
  for (let char of t) {
    if (counter[char]) {
      sortedString += char.repeat(counter[char])
    }
  }
  
  return sortedString
} 

sortByStrings("weather", "therapyw")

// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


function decodeString(s) {
	let decStr = '';
	let tempStr = '';

	for (let i = s.length; i >= 0; i--) {
		if (Number(s[i])) {
			for (let j = 0; j < s.length; j++) {
				if (s[j] === ']') {
					decStr = s.substring(j - 1, j);
					
					if (i !== 0){
					decStr = decStr.repeat(Number(s[i]));
					tempStr += decStr
					s = `${s.substring(0, i)}${s.substring(j + 1)}`;
					break;} else {
					  tempStr = (decStr+tempStr).repeat(s[i]);
					}
				}
			}
		}
	}
	return tempStr;
}

decodeString('2[b3[a]]');

//Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

//Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

//Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

//1¢, 1¢, 1¢, 1¢
//1¢, 1¢, 2¢
//1¢, 3¢
//2¢, 2¢

function changePossibilies(amount, coinsArr) {
  let possibilities = [];
  for (let i = 1; i <= amount; i++) {
      possibilities[i] = 0;       
  }
  possibilities[0] = 1;

  coinsArr.forEach(function(coin){
      for (let j = coin; j <= amount; j++) {
          let remainder = j - coin;
          possibilities[j] += possibilities[remainder];
      }
  });

  return possibilities[amount]; 
} 

changePossibilies(4, [1,2,3]);
changePossibilies(3, [1,2]);
changePossibilies(10, [2,3,4]);