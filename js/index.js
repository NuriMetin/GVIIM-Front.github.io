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
        $("#aztu_element").css("display", "none");
        $("#gviim_element").css("display", "none");
        $("#media_element").css("display", "none");
        $("#news_element").css("display", "none");
        $("#panel").slideToggle("fast");
    });
});


//let array = ['.salam', '#qaqa', 'balam'];

/**
 * gets array of css selectors and applies display parameter to them
 * @param {array} array 
 * @param {string} display 
 */
function displayParam( array, display ){
    !Array.isArray(array) && 
        (document.querySelector(array).style.display = display) || 
            array.forEach( (elem)=>{ document.querySelector(elem).style.display = display } );
}

$(document).ready(function () {
    if ($(window).width() <= 991) {
        $("#search").click(function () {
            displayParam(['#gviim_element','#media_element','#news_element','#aztu_element'], 'none');
            // $("#gviim_element").css("display", "none");
            // $("#media_element").css("display", "none");
            // $("#news_element").css("display", "none");
            // $("#aztu_element").css("display", "none");
            $("#search").css("display", "block");
            $("#search").css("padding", "0px");
            $("#search_element").slideToggle("fast");
        });
        $("#aztu").click(function () {
            $("#gviim_element").css("display", "none");
            $("#search_element").css("display", "none");
            $("#media_element").css("display", "none");
            $("#news_element").css("display", "none");
            $("#aztu_element").slideToggle("fast");
        });
        $("#gviim").click(function () {
            $("#media_element").css("display", "none");
            $("#search_element").css("display", "none");
            $("#aztu_element").css("display", "none");
            $("#news_element").css("display", "none");
            $("#gviim_element").slideToggle("fast");
        });
        $("#media").click(function () {
            $("#gviim_element").css("display", "none");
            $("#aztu_element").css("display", "none");
            $("#news_element").css("display", "none");
            $("#search_element").css("display", "none");
            $("#media_element").slideToggle("fast");
        });
        $("#news").click(function(){
            $("#news_element").slideToggle("fast");
        });
    }
});
