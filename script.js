'use strict'

const btn = document.getElementById('btn');
const txt = document.getElementById('text');
const square = document.getElementById('square');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range')
const span = document.getElementById('range-span')
const circle = document.getElementById('circle')

e_btn.style.display = "none"

const changeColor = function(event) {
    txt.textContent = event.target.value
    square.style.backgroundColor = txt.value;
    
}

const changeCircleOption = function(event) {
    span.textContent = event.target.value
    circle.style.width = range.value + "%";
    circle.style.height = range.value+ "%"; 
    
}

btn.addEventListener('click', changeColor);
range.addEventListener('input', changeCircleOption)

