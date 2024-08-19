const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let miles = document.getElementById("miles").value
    let gallons = document.getElementById("gallons").value
    let mpg = miles * gallons
    let mmpg = `The total gallons of gas used per hour is ${mpg}`

    document.getElementById("output").innerHTML = mmpg
})