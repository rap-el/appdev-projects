const colors = ["green", "red", "rgba(133, 122, 200)", "f15025", "FFC0CB", "edb4d9"]
const quotes = [
"The best revenge is not to be like your enemy",
"Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.",
"Be tolerant with others and strict with yourself",
"If it is not right, do not do it, if it is not true, do not say it",
"It’s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.",
"External things are not the problem. It’s your assessment of them. Which you can erase right now."]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    console.log(document.body)   
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textcontent = colors[randomNumber]

    document.getElementById("output").innerHTML = quotes[randomNumber1]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
}
getRandomNumber1 = () =>{
    return Math.floor(Math.random() * quotes.length)
}