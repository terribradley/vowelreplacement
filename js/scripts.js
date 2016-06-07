$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
   var userInput = $("#userinput").val();
   var vowelArray = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
   var puzzleString = ""
   for (var inputIndex=0; inputIndex<userInput.length; inputIndex ++) {
     var isVowel=false;
     for (var vowelIndex =0; vowelIndex<vowelArray.length; vowelIndex ++) {
       if (vowelArray[vowelIndex]=== userInput[inputIndex]) isVowel=true;
      }
      if (isVowel) puzzleString += "-";
      else puzzleString += userInput[inputIndex];
      isVowel=false;
   }
   console.log(puzzleString);
 });
});
