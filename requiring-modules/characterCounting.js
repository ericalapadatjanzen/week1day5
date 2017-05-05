




var count = function countLetters(string){
var output = {};
for(var i = 0; i < string.length; i++){
  var theString = string[i];
  if (string[i] in output){
    output[string[i]] += 1;
  } else {
    output[string[i]] = 1
  }
}

  return output;
}
console.log(count("lighthouse in the house"));

module.exports = count;
