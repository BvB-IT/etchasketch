let input1;
let input2;

function userInput1() {
  let string1 = prompt("type here the first word", "first");
  input1 = string1;
  return input1;
}

function userInput2() {
  let string2 = prompt("Now for the second word", "second");
  input2 = string2;
  return input2;
}

function inputAnagramCheck(input1, input2) {
  let len1 = input1.length;
  let len2 = input2.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = input1.split("").sort().join("");
  let str2 = input2.split("").sort().join("");
  if (str1 === str2) {
    alert("Indeed this is an Anagram");
  } else {
    alert("This is not an anagram");
  }
}

function check() {
  userInput1();
  userInput2();
  inputAnagramCheck(input1, input2);
}

check();
