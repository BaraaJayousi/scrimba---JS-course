/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnEl = document.getElementById('conv-btn')
const inputEl = document.getElementById('input-el')

const lenPaEl = document.getElementById('length-p')
const volPaEl = document.getElementById('vol-p')
const massPaEl = document.getElementById('mass-p')

let conversionVal = 0

btnEl.addEventListener('click',()=>{
    conversionVal = Number(inputEl.value).toFixed(2)
    lenPaEl.innerHTML = `${conversionVal} meteres = ${(conversionVal * 3.281).toFixed(3)} feet | 
    ${conversionVal} feet = ${(conversionVal / 3.281).toFixed(3)} meters`
    
    volPaEl.innerHTML = `${conversionVal} liters = ${(conversionVal * 0.264).toFixed(3)} gallons | 
    ${conversionVal} gallons = ${(conversionVal / 0.264).toFixed(3)} liters`
    
    massPaEl.innerHTML = `${conversionVal} kilos = ${(conversionVal * 2.204).toFixed(3)} pounds | 
    ${conversionVal} pounds = ${(conversionVal / 2.204).toFixed(3)} kilos`
    
})