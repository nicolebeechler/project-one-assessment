let counterDisplayEl = document.getElementById('counter')
let counterMinusEl = document.getElementById('minus')
let counterPlusEl = document.getElementById('plus')

const inputNumber = document.getElementById('input')

let count = 0

updateDisplay()

counterPlusEl.addEventListener("click", () => {
    count += parseInt(inputNumber.value)
    updateDisplay()
})

counterMinusEl.addEventListener("click", () => {
    count -= parseInt(inputNumber.value)
    updateDisplay()
})

function updateDisplay(){
    counterDisplayEl.innerText = count
}

