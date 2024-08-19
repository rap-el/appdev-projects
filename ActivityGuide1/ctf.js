const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let cel = document.getElementById("celsius").value
    let fahrenheit = cel * (9/5) + 32
    let mmpg = `${cel} celsius to fahrenheit is ${fahrenheit}`
    document.getElementById("output").innerHTML = mmpg
})