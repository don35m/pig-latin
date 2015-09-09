// var pigLatin = function(wordOne) {
//
// var newWordOne = wordOne.split('');
// var wordOneLength = wordOne.length;
//
//   for (var i = 0; i < wordOneLength; i++) {
//     if (newWordOne[0] === "a"
//         || newWordOne[0] === "e"
//         || newWordOne[0] === "i"
//         || newWordOne[0] === "o"
//         || newWordOne[0] === "u") {
//      return wordOne.concat("ay");
//      break;
//    }  else {
//       newWordOne = wordOne.slice(1) + wordOne.slice(0, 1);
//       return newWordOne.concat("ay");
//   }
//  }
// };


// var pigLatin = function (word) {
//   var vowels = ["qu","a", "e", "i", "o"];
//   if (vowels.indexOf(word.charAt(0)) !== -1) {
//     return word + "ay";
//   } else if (vowels.indexOf(word.charAt(1)) !== -1) {
//     return (word.slice(1) + word.slice(0, 1) + "ay");
//   } else if (vowels.indexOf(word.charAt(2)) !== -1) {
//     return (word.slice(2) + word.slice(0,2) + "ay");
//   } else {
//     return (word.slice(3) + word.slice(0,3) + "ay");
//   }
// };
//
// var pigLatinQU = function (word) {
//   var qu = ["qu"];
//   if (qu.indexOf(qu.charAt(2)) !== -1) {
//     return (qu.slice(2) + qu.slice(0,2) + "ay");
//
//   }
// };

var pigLatin = function(sentence) {
  var pigword_array = []
  sentence.split(" ").forEach(function(word){
    var word = word.toLowerCase();
    var me = /^([squ]+|[y]|[^aieouy]+)(\w*)/ ;
    var pigword = (word.replace(me, "$2$1")).concat("ay");
    pigword_array.push(pigword) ;
  });
  return pigword_array.join(" ")
};

$(function() {
  $("form#pig-latin").submit(function(event) {
    var english = $("input#english").val();
    var pigword = pigLatin(english);
    $("#translation").show();
    $("#piglatin").text(pigword);
    event.preventDefault();
  });
});
