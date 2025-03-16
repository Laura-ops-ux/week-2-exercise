//They are only four
classList.add();
classList.remove();
classList.replace();
classList.toggle();
const div = document.createElement("div")
div.className = "card"
//console.log(div.outerHTML)
div.classList.remove("card")
div.classList.add("active","inactive","hoover","upwards")
div.classList.toggle("visible")
div.classList.replace("visible","invisible")