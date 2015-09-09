var pigLatin = function(text) {
  var array = text.split("-").join(" - ").split(" ");
  var newArray = []
  array.forEach(function(word) {
    if (word.match(/[^a-zA-Z]/)) {
      word;
    } else if (word[0].match(/[aeiou]/)) {
      word += "ay";
    } else {
      var pre = word.match(/\b([bcdfghjklmnprstvwxyz]|qu)+/)[0];
      var post = word.slice(pre.length);
      word = post + pre + "ay";
    }
    newArray.push(word);
  });
  return newArray.join(" ").replace(/\s-\s/, "-");
};
