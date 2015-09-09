var pigLatin = function(text) {
  var array = text.split("-").join(" - ").split(" ");
  var newArray = []
  array.forEach(function(word) {
    if (word.match(/^$/)) {
      word.replace(/^$/, " ");
      word;
    } else if (word.match(/^-$/)) {
      word;
    } else if (word[0].match(/[aeiouAEIOU]/)) {
      word += "ay";
    } else {
      var pre = word.match(/\b([bcdfghjklmnprstvwxyzBCDFGHJKLMNPRSTVWXYZ]|qu|QU)+/)[0];
      var post = word.slice(pre.length);
      word = post + pre + "ay";
    }
    newArray.push(word);
  });
  return newArray.join(" ").replace(/\s-\s/g, "-");
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
