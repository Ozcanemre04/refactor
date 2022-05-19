

export default function displayheadercontent(data,header0,section,input){
    let h2 = document.createElement('h2')
            header0.appendChild(h2)
            h2.innerText = data.city.name
            let url="url('https://source.unsplash.com/1920x700/?" + input.value + "')"
            section.style.backgroundImage =url
        
           
}

