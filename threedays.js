$(document).ready(function(){
    var image = $('#weather_img3');
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
    $('#location_name3').html("Astana");
    $('#temp3').html("5°C.");
    $('#weather3').html('Cloudy <i class="fa-solid fa-cloud"></i>');
    $('#wind3').html("Wind: 55m/s");
    image.attr('src', 'cloudy.jpeg');
}

function almatyLoc(){
    $('#location_name3').html("Almaty");
    $('#temp3').html("15°C.");
    $('#weather3').html('Sunny <i class="fa-solid fa-sun"></i>');
    $('#wind3').html("Wind: 6m/s");
    image.attr('src', 'sunny.png');
}

function karagandyLoc(){
    $('#location_name3').html("Karagandy");
    $('#temp3').html("-9°C.");
    $('#weather3').html('Sunny <i class="fa-solid fa-sun"></i>');
    $('#wind3').html("Wind: 14m/s");
    image.attr('src', 'sunny.png');
}

function shymkentLoc(){
    $('#location_name3').html("Shymkent");
    $('#temp3').html("20°C.");
    $('#weather3').html('Rainy <i class="fa-solid fa-cloud-rain"></i>');
    $('#wind3').html("Wind: 5m/s");
    image.attr('src', 'rain.jpeg');
}

});

//for warning
function showWarn(){
    var popup = document.getElementById('warnItem1');
    popup.classList.toggle("show");
}

//date change
$(document).ready(function () {
    
    function updateDate() {
      const currentDateElement = $('#datecon');
      const currentDate = new Date();
      
      const dateAfterTomorrow = new Date(currentDate);
      dateAfterTomorrow.setDate(currentDate.getDate() + 2);

      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
      };
      
      const theDate = dateAfterTomorrow.toLocaleDateString('en-US', options);
      currentDateElement.text(theDate);
    }
  
    updateDate();
  });