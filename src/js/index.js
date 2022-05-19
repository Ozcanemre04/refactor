
let firstweather = document.querySelector('.firstweather')
let section1 = document.querySelector('.section1')
let main1 = document.querySelector('.main1')
let footer = document.querySelector('.footer1')
let header = document.querySelector('.header')
let label = document.querySelector('.label1')

let section2 = document.querySelector('.section2')
let main2 = document.querySelector('.main2')
let header2 = document.querySelector('.header2')
let add = document.querySelector('.add')
let secondweather = document.querySelector('.secondweather')
let footer2 = document.querySelector('.footer2')


//firstweather
function weatherFetch() {
    let names = firstweather.value
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + names + '&lang=fr&units=metric&cnt=40&appid=319e9dba46be46664ace4a16c7d4f03c')
        .then(resp => resp.json())
        .then(data => {
            displayheadercontent(data,header,section1,firstweather)
              finddatalist(data,displayWeather,firstweather)
  })

}
import displayWeather from "./displayWeather"
import displayWeather2 from "./displayWeather2"
import displayheadercontent from './displayHeaderContent'

import finddatalist from './findDataList';


firstweather.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        if(firstweather.value===""){
            alert('empty')
        }
        else{
        weatherFetch()
        header.innerHTML = ""
        main1.innerHTML = ""
        }
    }
})

//remove

import removeSectionElement from './removeSectionElement'
let remove = document.createElement('button')
remove.className="remove1"
footer.appendChild(remove)
remove.innerText = "remove"
remove.addEventListener('click',removeSectionElement)


//secondweather


function weatherFetch2() {
    let names = secondweather.value
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + names + '&lang=fr&units=metric&cnt=40&appid=319e9dba46be46664ace4a16c7d4f03c')
        .then(resp => resp.json())
        .then(data => {

           displayheadercontent(data,header2,section2,secondweather)

         finddatalist(data,displayWeather2,secondweather)


        })

}






//compare
let body = document.querySelector('body')
let compare = document.querySelector('.compare')

compare.className="compare"
compare.addEventListener('click', () => {
    section2.classList.toggle('active')
    body.classList.toggle('flex')
    if (body.classList.contains('flex')) {
        section1.style.width = "50%"
        compare.style.width="5%"
        compare.style.margin="0"
        remove.style.left="20%"
        label.style.left="20%"
        
       
    } else {
        section1.style.width = "100%"
        compare.style.width="200px"
        compare.style.margin="20px 0 0 50%"
        remove.style.left="50%"
        label.style.left="50%"
        
    }

})

//add
add.addEventListener('click', ()=>{
    if(secondweather.value===""){
        alert('empty')
    }
    else{
    weatherFetch2()
     header2.innerHTML = ""
      main2.innerHTML = ""
    }
})

//remove2
let remove2 = document.createElement('button')
remove2.className="remove2"
footer2.appendChild(remove2)
remove2.innerText = "remove"
remove2.addEventListener('click',removeSectionElement)


