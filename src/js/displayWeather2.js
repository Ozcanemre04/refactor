let main2 = document.querySelector('.main2')
export default function displayWeather2(data) {



    let div = document.createElement('div')

    main2.appendChild(div)
    let img = document.createElement('img')
    div.appendChild(img)
    img.src = data.icon;
    let weather = document.createElement('p')
    div.appendChild(weather)
    weather.innerText = data.weather;
    let temp = document.createElement('p')
    div.appendChild(temp)
    temp.innerText = data.temp;
    let humidity = document.createElement('p')
    div.appendChild(humidity)
    humidity.innerText = data.humidity;
    let wind = document.createElement('p')
    div.appendChild(wind)
    wind.innerText = data.wind;
    let date = document.createElement('p')
    div.appendChild(date)
    date.innerText = data.date;



}