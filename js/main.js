let counterDisplayEl = document.getElementById('counter')
let counterMinusEl = document.getElementById('minus')
let counterPlusEl = document.getElementById('plus')

const inputNumber = document.getElementById('input')

let count = 0

updateDisplay()

counterPlusEl.addEventListener("click", () => {
    count += parseInt(inputNumber.value)
    updateDisplay()
    negativeNum(count)
})

counterMinusEl.addEventListener("click", () => {
    count -= parseInt(inputNumber.value)
    updateDisplay()
    negativeNum(count)
})

function updateDisplay(){
    counterDisplayEl.innerHTML = count
}

function negativeNum(value){
    if (value < 0) {
        counterDisplayEl.style.color = '#f00'
    } else {
        counterDisplayEl.style.color = ''
    }
}