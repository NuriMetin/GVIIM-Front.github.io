window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.boxShadow = "0 15px 15px 0 rgba(0, 0, 0, 0.19)";
    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";
    }
}

$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("fast");
    });
});