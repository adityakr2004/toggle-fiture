
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click", (e) =>{
    e.preventDefault()

    if (btn.innerText == "Light") {
        container.style.backgroundColor = "black"
        btn.innerText ="Dark"
    }else if(btn.innerText == "Dark"){
        container.style.backgroundColor = "white"
        btn.innerText ="Light"
    }

    // console.log("aditya")
})
