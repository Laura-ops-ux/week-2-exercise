function changeColor(){
    let story = document.getElementById("para")
    story.style.color="yellow"
    alert("color changed")
}
function changeText(){
    let text = document.getElementById("para 2")
    text.innerHTML = "<ul><li>beans</li><li>maize</li><li>cowpeas</li></ul> "
    let textTwo = document.getElementById("para 3")
    textTwo.textContent = "Wallace's daughter"
}