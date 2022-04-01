

let weather = {
    "apiKey": "6fdfa0abcd920b78667524d5a185678b",
    fetchWeatherMetric: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather was found.");
                throw new Error("No weather was found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeatherMetric(data));
    },
    displayWeatherMetric: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".deg-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".deg-description").innerText = description;
        document.querySelector(".deg-temp").innerText = temp + "°C";
        document.querySelector(".deg-humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".deg-wind").innerText = "Wind speed: " + speed + " m/s";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    fetchWeatherImperial: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather was found.");
                throw new Error("No weather was found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeatherImperial(data));
    },
    displayWeatherImperial: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".imp-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".imp-description").innerText = description;
        document.querySelector(".imp-temp").innerText = temp + "°F";
        document.querySelector(".imp-humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".imp-wind").innerText = "Wind speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeatherMetric(document.querySelector(".search-bar").value);
        this.fetchWeatherImperial(document.querySelector(".search-bar").value);
    }
};

// eventlistener for search button
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        weather.search();
    }
});


let input = document.querySelector(".input");
document.querySelector(".input").addEventListener("change", function () {
    let dataMetric = document.querySelector(".data-metric");
    let dataImperial = document.querySelector(".data-imperial");
    if (input.checked) {
        dataMetric.classList.add("hidden");
        dataImperial.classList.remove("hidden");
    } else {
        dataMetric.classList.remove("hidden");
        dataImperial.classList.add("hidden");
    }
});

weather.fetchWeatherMetric("Pune");
weather.fetchWeatherImperial("Pune");