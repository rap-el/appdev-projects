const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let speed = document.getElementById("speed").value
    let time = document.getElementById("time").value
    let d = speed * time
    let distance = `The total distance travelled by the car is ${d}`

    document.getElementById("output").innerHTML = distance
})