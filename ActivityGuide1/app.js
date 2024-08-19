//componenets for item no. 1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telNum = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    let x = `Hello ${name}, i see that youre from ${address}, and you are pursuing ${major} , and your phone number is ${telNum}.`

    document.getElementById("output").innerHTML = x
})