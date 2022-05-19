export default function removeSectionElement(e){
    let removeMainChidlren = e.target.parentElement.parentElement.children[1].firstChild
    let removeHeaderText = e.target.parentElement.parentElement.children[2]
    
    removeMainChidlren.remove();
    removeHeaderText.textContent = ""

  
}