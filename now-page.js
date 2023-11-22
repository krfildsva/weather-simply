//for changing location
$(document).ready(function(){
    var image = $('#weather_img');
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
    $('#location_name1').html("Astana");
    $('#temp1').html("-16°C.");
    $('#weather1').html('Sunny <i class="fa-solid fa-sun"></i>');
    $('#wind1').html("Wind: 25m/s");
    $('#storm_warn1').html("");
    image.attr('src', 'sunny.png');
}

function almatyLoc(){
    $('#location_name1').html("Almaty");
    $('#temp1').html("6°C.");
    $('#weather1').html('Cloudy <i class="fa-solid fa-cloud"></i>');
    $('#wind1').html("Wind: 5m/s");
    $('#storm_warn1').html("");
    image.attr('src', 'cloudy.jpeg');
}

function karagandyLoc(){
    $('#location_name1').html("Karagandy");
    $('#temp1').html("-20°C.");
    $('#weather1').html('Cloudy <i class="fa-solid fa-cloud"></i>');
    $('#wind1').html("Wind: 20m/s");
    $('#storm_warn1').html("");
    image.attr('src', 'cloudy.jpeg');
}

function shymkentLoc(){
    $('#location_name1').html("Shymkent");
    $('#temp1').html("10°C.");
    $('#weather1').html('Rainy <i class="fa-solid fa-cloud-rain"></i>');
    $('#wind1').html("Wind: 30m/s");
    $('#storm_warn1').html("Storm Danger! Click for more!");
    image.attr('src', 'rain.jpeg');
}



});


//for warning
function showWarn(){
    var popup = document.getElementById('warnItem');
    popup.classList.toggle("show");
}

//for button
function seemoreFunction(){
    var confirmbtn  = confirm("Do you want to leave the page?")
    if(confirmbtn){}
    else{ 
        var link = document.getElementById('confirmbtn');
        link.href = 'now-page.html';
    }
}
