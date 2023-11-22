//for changing location
$(document).ready(function(){
    var image = $('#weather_img2');
    var select_element = $('#select_btn');

    select_element.change(function() {
        var selectedValue = select_element.val();
        switching(selectedValue);
    });

    function switching(selectedValue){
        switch(selectedValue){
            case "Astana": astanaLoc();
                break;
            case "Almaty": almatyLoc();
                break;
            case "Karagandy": karagandyLoc();
                break;
            case "Shymkent": shymkentLoc();
                break;
        }
    }
function astanaLoc(){
    $('#location_name2').html("Astana");
    $('#temp2').html("30°C.");
    $('#weather2').html('Sunny <i class="fa-solid fa-temperature-high"></i>');
    $('#wind2').html("Wind: 30m/s");
    $('#storm_warn2').html("Heat wave!! Click for more");
    image.attr('src', 'sunny.png');
}

function almatyLoc(){
    $('#location_name2').html("Almaty");
    $('#temp2').html("10°C.");
    $('#weather2').html('Rainy <i class="fa-solid fa-cloud-rain"></i>');
    $('#wind2').html("Wind: 0m/s");
    $('#storm_warn2').html("");
    image.attr('src', 'rain.jpeg');
}

function karagandyLoc(){
    $('#location_name2').html("Karagandy");
    $('#temp2').html("-12°C.");
    $('#weather2').html('Sunny <i class="fa-solid fa-sun"></i>');
    $('#wind2').html("Wind: 9m/s");
    $('#storm_warn2').html("");
    image.attr('src', 'sunny.png');
}

function shymkentLoc(){
    $('#location_name2').html("Shymkent");
    $('#temp2').html("40°C.");
    $('#weather2').html('Cloudy <i class="fa-solid fa-cloud"></i>');
    $('#wind2').html("Wind: 0m/s");
    $('#storm_warn2').html("");
    image.attr('src', 'cloudy.jpeg');
}

});
//heat warning
function showWarn2(){
    var popup = document.getElementById('warnItem2');
    popup.classList.toggle("show");
}

//for button
function seemoreFunction(){
    var confirmbtn  = confirm("Do you want to leave the page?")}