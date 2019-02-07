$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val().toUpperCase();

    $(".person1").text(person1Input);

    $("#story").show();
    event.preventDefault();
  });
});
