$("body").click(function() {
   $("ul").slideUp(100);
});

$("i").click(function (event) {
    event.stopPropagation();
   $("ul").slideToggle(100);
});

