$(document).ready(function() {
  $('li').css('background-color', 'green');

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $('li').css('background-color', 'green');
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $('li').css('background-color', 'white');
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $('li').css('background-color', 'red');
    $("ul#user").children("li").first().click(function() {
      alert('hi');
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('hi');
        $(this).remove();
    });
  });
});
