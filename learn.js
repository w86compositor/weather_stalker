$(document).ready(function () {
  // hiding all css weather animations
  $("#the-sun").hide();
  $("#clouds").hide();
  $(".card").hide();


  function findMyLocation() {
    let tempCel = "C";
    let tempFah = "F";

    if (!navigator.geolocation) {
      result.innerHTML = "Geolocation is not supported by your browser";
      return;
    }

    function success(position) {
      let latitude = "lat=" + position.coords.latitude;
      let longitude = "lon=" + position.coords.longitude;

      let askLoc = `https://fcc-weather-api.glitch.me/api/current?${latitude}&${longitude}`

      //Make the AJAX request
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let resp = JSON.parse(this.responseText);
          $("#name").html(resp.name + ", ");
          $("#country").html(resp.sys.country);
          $("h2.celcius").html(Math.floor(resp.main.temp) + String.fromCharCode(176) + tempCel)
          $("#desc").html(resp.weather[0].description);
          //  $("#icon").append('<img src= "' + resp.weather[0].icon + '">');

          // Adding an event listener to toggle between celcius and fahrenheit
          $("span.slider").on("click", function () {
            // Calculating celcius and fahrenheit...it's just Math
            let fahrenheit = Math.floor((resp.main.temp * 1.8) + 32);
            let celcius = Math.floor((fahrenheit - 32) / 1.8);

            //Checking between celcius and fahrenheit
            if ($("h2.celcius").hasClass("celcius")) {
              $("h2.celcius").removeClass("celcius").addClass("fahrenheit");
              $("h2.fahrenheit").html(fahrenheit + String.fromCharCode(176) + tempFah);
            } else if ($("h2.fahrenheit").hasClass("fahrenheit")) {
              $("h2.fahrenheit").removeClass("fahrenheit").addClass("celcius");
              $("h2.celcius").html(celcius + String.fromCharCode(176) + tempCel);
            }
          });//closing event listener
          //check the weather description to display cool css animations
          let checkWeatherDesc =  resp.weather[0].description;    //$("span#desc").html();
          switch (checkWeatherDesc) {
            case "clear sky":
              // showing animations
              console.log(checkWeatherDesc);
              $("#the-sun").show();
              $(".card").show();
              break;

            case "few clouds":
              // showing animations
              console.log(checkWeatherDesc);
              $("#the-sun").show();
              $("#clouds").show();
	          $(".card").show();
              break;

            case "scattered clouds":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;

            case "broken clouds":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;

            case "shower rain":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;

            case "rain":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;

            case "thunderstorm":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;

            case "snow":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;

            case "mist":
              console.log(checkWeatherDesc);
	            $(".card").show();
              break;
          }
        }//closing xhttp if statement
      }; // closing xhttp callback function
      xhttp.open("GET", `${askLoc}`, true);
      xhttp.send();

    } //closing bracket of success function

    function error() {
	  let result = document.getElementById("out");
      result.innerHTML = "Look if you don't hit the allow button, I can't give you the weather so reload the page and hit allow please";
    }
    //calling the navigator object
    navigator.geolocation.getCurrentPosition(success, error);
  } // closing function findMyLocation
  findMyLocation();
}); // closing document.ready



