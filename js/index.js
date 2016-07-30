$(document).ready(function() {
  
  var randomQuote;
  var randomNum;
  var author;
  
  function getQuote() {
    var quotes = ["Hello World!", " Skywalker!", "Dorthy!", "My Mom!", "Never, never, never give up."];
    var author = ["-Bootstrap", "-Lord Vader", "-OZ", "-Muscle Man", "-Churchill"];

     randomNum = Math.floor((Math.random() * quotes.length));
     randomQuote = quotes[randomNum];
     var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);

  }

  $("#tweet").on("click", function(){
    window.open("http://twitter.com/intent/tweet?text="+randomQuote);
  });
  
  $("#rocket").on("click", function(){
    getQuote();
  });

});