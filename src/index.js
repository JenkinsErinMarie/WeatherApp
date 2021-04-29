function displayWeather(response) {
  document.querySelector(".city-displayed").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "5ab95da4705927c2bd6fc9ace0e5b831";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

}


let currentTime = document.querySelector(".current-time");

let now = new Date();

      let h2 = document.querySelector("h2");

      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let year = now.getFullYear();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[now.getDay()];

      let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let month = months[now.getMonth()];

      currentTime.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

      let currentCity = document.querySelector("#city-form");
      currentCity.addEventListener("submit", search);

     

      