let header2 = document.querySelector('.header2')
let section2 = document.querySelector('.section2')
let secondweather = document.querySelector('.secondweather')


export default function displayheadercontent2(data){
    let h2 = document.createElement('h2')
    header2.appendChild(h2)
    h2.innerText = data.city.name
    section2.style.backgroundImage = "url('https://source.unsplash.com/500x500/?" + secondweather.value + "')"
}