const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let fatass = document.getElementById("fatass").value
    let calsPerCookie = (300 * 10)/ 40
    let cal = fatass * calsPerCookie
    let mmpg = `You ate a total of ${cal} calories.`
    document.getElementById("output").innerHTML = mmpg
})