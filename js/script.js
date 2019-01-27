$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var input = $(this).val();
    console.log(input);
    $("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> " + input + "</li>");
    $(this).val("");
  }
});
