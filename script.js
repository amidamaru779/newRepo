'use strict';

let title
let number 
const isNumber = function(num){
    return(!isNaN(num) && isFinite(num))
}

const startGame = function (botNumber, attempt) {
    title = confirm("Угадай число от 1 до 100")
    if (title === false){
        alert("Спасибо за уделённое время. Досвидание!");
        return
    }
    
    const play = function () {
        if (0 < attempt){
            number = prompt("Пожалуйста введите число")
        
            if (number === null){
                alert("Игра окончена! Спасибо за игру!");
                return
            }
        

            if (!isNumber(number)){
                alert("Введите число!");
                play();
            }
        
            if (number > botNumber){
                attempt--
                alert("Загаданное число меньше.Осталось" + " " + attempt + " " + "попыток!");
                play()
            }else if (number < botNumber){
                attempt--
                alert("Загаданное число больше.Осталось" + " " + attempt + " " + "попыток!");
                play()   
            } 

            if (+number === botNumber){
                alert("Поздравляю, Вы угадали!!! Хотели бы сыграть ещё ?");
                startGame(botNumber = Math.floor(Math.random( ) * (100 - 1 + 1)) + 1, 10);
            }
        } else {
            alert("Попытки закончились, хотите сыграть еще?")
        }
        
        
    }
    play()
}

startGame(Math.floor(Math.random( ) * (100 - 1 + 1)) + 1, 10);
