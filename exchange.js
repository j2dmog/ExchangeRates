const input1 = document.querySelector('input[type = search]')
const input2 = document.querySelector('input[type = text]')
const USD = document.querySelector('.USD')
const ZAR = document.querySelector('.ZAR')
const btn = document.querySelector('.btn')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const USDcurrency = async () => {
    const uApi = await fetch('https://api.frankfurter.app/latest?from=USD')
    const objFormat2 = await uApi.json()
    return objFormat2.rates.ZAR
}
USD.addEventListener('click', async () => {
    const Ucurrency = await USDcurrency()
    btn.addEventListener('click', () =>{
        screen1.textContent = input1.value * Ucurrency
        input1.value = ''
    })
})

const SARand = async () => {
    const api = await fetch('https://api.frankfurter.app/latest?from=ZAR')
    const objFormat = await api.json()
    return objFormat.rates.USD
}

ZAR.addEventListener('click', async () => {
    const sRand = await SARand()
    btn.addEventListener('click', () =>{
        screen2.textContent = input2.value * sRand
        input2.value = ''
    })
})
