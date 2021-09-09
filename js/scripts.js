$(document).ready(function(){
  $(".blanks form").submit(function(event){

    var blanks= ["person1","person2","animal","exclamation","verb","noun"];

    blanks.forEach(function(blank){
      var userInput=$("input#"+blank).val();
      $("."+blank).text(userInput);
    });
    

    $("#story").show();

    $("body").addClass("green-background");

     $("ul#user").text("Hello, where is my story?");
      $("ul#webpage").text("Yes hello, there you have it!");


    event.preventDefault();
  });
});