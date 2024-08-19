const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let totalSales = document.getElementById("total").value


    let x = totalSales * 0.23

    document.getElementById("output").innerHTML = x
})