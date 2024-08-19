const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let m = document.getElementById("male").value
    let f = document.getElementById("female").value
    
    let totalm = m / 20
    let totalf = f / 20
    let mmpg = `There are a total of 20 students, ${totalm} are males and ${totalf} for the females`
    document.getElementById("output").innerHTML = mmpg
})