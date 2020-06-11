$("i").click(function () {
    $("ul").slideToggle(100);
});

$(document).click(function (event) {
const targetAtrribute = event.target.id;
    if (targetAtrribute === "") {
        const menu = $("ul").css("display");
        if(menu === "block") {
            $("ul").toggle();
        }
    }
});
