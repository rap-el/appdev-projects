const colors = ["green", "red", "rgba(133, 122, 200)", "f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    console.log(document.body)   
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textcontent = colors[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
}