 



export default function finddatalist(data,displayweather){
    let datas=data.list
    for (let i = 0; i < datas.length; i++) {
        let meteo = {
            wind: datas[i].wind.speed,
            icon: "http://openweathermap.org/img/w/" + datas[i].weather.map(icon => icon.icon).join(' ') + ".png",
            weather: datas[i].weather.map(icon => icon.description).join(' '),
            date: datas[i].dt_txt,
            temp: datas[i].main.temp,
            humidity: datas[i].main.humidity,
           

        }
        
      
        
         
     
      displayweather(meteo)
    
 }
}
