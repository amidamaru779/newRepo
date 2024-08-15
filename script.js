'use strict';

let title
let number 
const isNumber = function(num){
    return(!isNaN(num) && isFinite(num))
}

const startGame = function (botNumber) {
    title = confirm("Угадай число от 1 до 100")
    if (title === false){
        alert("Спасибо за уделённое время. Досвидание!");
        return
    }
    
    const play = function () {
        number = prompt("Пожалуйста введите число")
        
        if (number === null){
            alert("Игра окончена!");
            return
        }

        if (!isNumber(number)){
            alert("Введите число!");
            play();
        }
        
        if (number > botNumber){
            alert("Загаданное число меньше");
            play()
        }else if (number < botNumber){
            alert("Загаданное число больше");
            play()   
        } 

        if (+number === botNumber){
            alert("Поздравляю, Вы угадали!");
        }
        
        
    }
    play()
}

startGame(Math.floor(Math.random( ) * (100 - 1 + 1)) + 1)
