// 1.
function shoutOut(){
  console.log("Halo Function!");
}

shoutOut()

// 2.
function calculateMultiply(num1, num2){
    var multiplyResult = num1 * num2;
    console.log(multiplyResult)
}

calculateMultiply(4, 4)

// 3.
function processSentence(name, age, address, hobby){
    console.log("My name is " + name + ", I am " + age + " years old, my address is " + address + ", my hobby is " + hobby);
}

var name = "Budi";
var age = "20";
var address = "bawah jembatan";
var hobby = "tidur";

processSentence(name, age, address, hobby)
processSentence("Abdul", "68", "luar angkasa", "minum")
