/* 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
 ```js*/

console.log("Q:(1)");

let paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
const word = "love";
const word1 = "not";
const countWords = (paragraph) => {
  let a = paragraph.split(" ");
  console.log(` length of a paragraph is ${a.length}`);
  let count = 0;
  let count1 = 0;
  for (let i = 0; i < a.length; i++) {
    if (word === a[i]) {
      count++;
    }
    if (word1 === a[i]) {
      count1++;
    }
  }

  console.log(` The repeated word of '${word1}'=${count1} times`);
  console.log(` The repeated word of '${word}'=${count} times`);
  return count;
};

countWords(paragraph);

// 1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text.
// ```js

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
console.log("Q:(2.a)");
const triangle = () => {
  let rows = 3;
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= i; j++) {
      string += "#";
    }
    string += "\n";
  }
  console.log(string);
};
triangle();
// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// ```js
console.log("Q:(2.b)");

const sevenRandomNumbers = () => {
  let max = 7;
  let random = [];
  for (let i = 0; i < max; i++) {
    let temp = Math.floor(Math.random() * max);
    if (random.indexOf(temp) == -1) {
      random.push(temp);
    } else {
      i--;
    }
  }
  console.log(`the seven random numbers =[${random}]`);
};
sevenRandomNumbers();

// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.
// ```js
console.log("Q:(2.c)");

const reverseArray = (arr) => {
  return arr.reverse();
};
console.log(reverseArray(["A", "B", "C"]));

// 2.d. Write a function which check if items of an array are unique?
// ```js

const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];
const checkUniqueness = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      return false;
    }
  }

  return true;
};
console.log(checkUniqueness(arrOne));
console.log(checkUniqueness(arrTwo));
