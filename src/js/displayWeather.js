let main1 = document.querySelector('.main1')
export default function displayWeather(data) {
 let div = document.createElement('div')

    main1.appendChild(div)
    let img = document.createElement('img')
    div.appendChild(img)
    img.src = data.icon;
    let weather = document.createElement('caption')
    div.appendChild(weather)
    weather.innerText = data.weather;
    let temp = document.createElement('p')
    div.appendChild(temp)
    temp.innerText = data.temp + "°C";
    let humidity = document.createElement('p')
    div.appendChild(humidity)
    humidity.innerText = "humidité: " + data.humidity + "%";
    let wind = document.createElement('p')
    div.appendChild(wind)
    wind.innerText = "vent: " + data.wind;
    let date = document.createElement('p')
    div.appendChild(date)
    date.innerText = data.date
   

    }