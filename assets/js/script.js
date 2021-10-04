// create a header with title

// create a side bar with input box, search button
    // event listener
        // save searched cities to local storage
        // create a button named that city 
            // event listener button that will send us back to Query while passing in the city name to local storage

// Query the API for the city -- check if it is one request or two
    // Look inside each on to see what we need to pull out
    // add a div for the current weather and populate it
        // Add classes based on current UV index 
        // Add images from the API 

    // add a div of divs for the five-day forecast, populate it 
        // Add images from API

var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial"

fetch(exampleURL)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
    console.log(data.name)
    document.getElementById("title").textContent = data.name
    document.getElementById("title").setAttribute("class", "green underlined inline")
    document.getElementById("sprite").setAttribute("src", data.sprites.front_default)
    // var oneCallApiURL = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&appid={7eadfe163e4a916ad08e58e02259128f} 
    // where lat and lon are equal to the data.coord.lat / data.coord.long that we get back from the current weather call
    // fetch(oneCallApiURL) keeping in mind that it will ask you for lat and longitude
    // we get lat and lon from the current weather api call
})
