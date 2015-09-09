var pigLatin = function(text) {
  var array = text.split(/\b/);
  var newArray = []
  array.forEach(function(word) {
    if (word.match(/[,.!?-]|\s|\s-\s/)) {
      word;
    } else if (word[0].match(/[aeiou]/i)) {
      word += "ay";
    } else if (word[0].match(/[y]/i)) {
      var preY = word.match(/\b([y])/i)[0];
      var postY = word.slice(preY.length);
      word = postY + preY + "ay";
    } else {
      var pre = word.match(/\b([bcdfghjklmnprstvwxz]|qu)+/i)[0];
      var post = word.slice(pre.length);
      word = post + pre + "ay";
    }
    newArray.push(word);
  });
  return newArray.join("").toLowerCase();
};

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    var text = $("textarea#text").val();
    var result = pigLatin(text);

    $(".translation").empty();
    $(".translation").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
