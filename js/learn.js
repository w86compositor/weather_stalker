$(document).ready(function () {
  // hiding all css weather animations
  $("p.disclaimer").hide();
  $("#the-sun").hide();
  $("#clouds").hide();
  $("#scattered-cloud").hide();
  $("#rain").hide();
  $("#thunderstorm").hide();
  $("#snow").hide();
  $("#mist").hide();
  ; $(".card").hide();


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
          let checkWeatherDesc = resp.weather[0].main;
          let weatherDesc = checkWeatherDesc.toLowerCase();
          switch (weatherDesc) {
            case "clear":
              // showing animations
              console.log(weatherDesc);
              $("#the-sun").show();
              $(".card").show();
              $("p.disclaimer").show();
              break;

            case "clouds":
              // showing animations
              console.log(weatherDesc);
              $("#the-sun").show();
              $("#clouds").show();
              $(".card").show();
              $("p.disclaimer").show();
              break;

            case "clouds":
              console.log(weatherDesc);
              $(".card").show();
              $("#scattered-cloud").show();
              $("p.disclaimer").show();
              break;

            case "clouds":
              console.log(weatherDesc);
              $(".card").show();
              $("#scattered-cloud").show();
              $("p.disclaimer").show();
              break;

            case "drizzle":
              console.log(weatherDesc);
              $(".card").show();
              $("#rain").show();
              $("p.disclaimer").show();
              break;

            case "rain":
              console.log(weatherDesc);
              $(".card").show();
              $("#rain").show();
              $("p.disclaimer").show();
              break;

            case "thunderstorm":
              console.log(weatherDesc);
              $(".card").show();
              $("#thunderstorm").show();
              $("p.disclaimer").show();
              break;

            case "snow":
              console.log(weatherDesc);
              $(".card").show();
              $("#snow").show();
              $("p.disclaimer").show();
              break;

            case "atmosphere":
              console.log(weatherDesc);
              $(".card").show();
              $("p.disclaimer").show();
              document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1495733014470-54e8000f94c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=309d1b63a5335ef23d17ca3572bc2705&auto=format&fit=crop&w=1050&q=80')";
              break;
          }
        }//closing xhttp if statement
      }; // closing xhttp callback function
      xhttp.open("GET", `${askLoc}`, true);
      xhttp.send();

    } //closing bracket of success function

    function error() {
      $(".switch").hide();
      $(".card").show();
      let result = document.getElementById("out");
      result.innerHTML = "Reload the page and hit allow please";
    }
    //calling the navigator object
    navigator.geolocation.getCurrentPosition(success, error);
  } // closing function findMyLocation
  findMyLocation();
}); // closing document.ready



