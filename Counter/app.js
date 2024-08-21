let count = 0
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) =>{
    console.log(btn)
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }
        else if(styles.contains('decrease5')){
            count -= 5
        }
        else if(styles.contains('increase5')){
            count += 5
        }
        else if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('random')){
            const picker = getRandomNumber12()
                if(picker == 1){
                    const negnum = getRandomNegNumber()
                    count = negnum
                }else{
                    const posnum = getRandomNumber()
                    count = posnum
                }
        }
        else{
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count == 0){
            value.style.color = "black"
        }

        value.textContent = count

        getRandomNumber12 = () =>{
            return Math.floor(Math.random() * 2)
        }
        getRandomNumber = () =>{
            return Math.floor(Math.random() * 100)
        }
        getRandomNegNumber = () =>{
            return Math.floor(Math.random() * -100)
        }
    })
})