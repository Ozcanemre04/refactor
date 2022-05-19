let section1 = document.querySelector('.section1')
let header = document.querySelector('.header')
let firstweather = document.querySelector('.firstweather')

export default function displayheadercontent(data){
    let h2 = document.createElement('h2')
            header.appendChild(h2)
            h2.innerText = data.city.name
            let url="url('https://source.unsplash.com/1920x700/?" + firstweather.value + "')"
            section1.style.backgroundImage =url
}