const billInput = document.getElementById('gettingbillinput')
const gettingtaxinput = document.getElementById('gettingtaxinput')
const numberOfPeopleDiv = document.getElementById('updatepeopleno')
const perPersonTotalDiv = document.getElementById('finalamount1')

let updatepeopleno = Number(numberOfPeopleDiv.innerText)

const billcalculator = () => {
    const bill = Number(billInput.value)
    const tipPercent = Number(gettingtaxinput.value) / 100
    const tipAmount = bill * tipPercent
    const total = tipAmount + bill
    const finalamount1 = total / updatepeopleno
    document.getElementById('finalamount1').innerText = `$${finalamount1.toFixed(2)}`
}


const incpeople = () => {

    updatepeopleno += 1
    numberOfPeopleDiv.innerText = updatepeopleno
    billcalculator()
}


const decpeople = () => {
    if (updatepeopleno <= 1) {
        return
    }
    updatepeopleno -= 1
    numberOfPeopleDiv.innerText = updatepeopleno
    billcalculator()
}