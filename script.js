'use strict'
const books = document.querySelectorAll('.book')
const background = document.querySelectorAll('body')[0]
const bookName3 = document.querySelectorAll('.book [target="_blank"]')[4]
const advertising = document.getElementsByClassName('adv')[0]
const book2 = document.querySelectorAll('ul')[0].querySelectorAll('li')
const book5 = document.querySelectorAll('ul')[5].querySelectorAll('li')
const book6 = document.querySelectorAll('ul')[2]
// восстановление порядка книг
books[0].before(books[1])
books[0].after(books[4])
books[5].after(books[2])

// убрал рекламу
advertising.remove()

// замена заднего фона 
 background.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")'


 // измененние книги 3
bookName3.textContent = "Книга 3. this и Прототипы Объектов"

//изменение книги 2
book2[1].after(book2[3])
book2[3].after(book2[6])
book2[6].after(book2[8])
book2[9].after(book2[2])

// изменение книги 5 

book5[1].after(book5[9])
book5[9].after(book5[3])
book5[3].after(book5[4])
book5[4].after(book5[2])
book5[2].after(book5[6])
book5[5].before(book5[7])

// добаление главы 8 в книгу 6 
const newBook6Element = document.createElement('li')
newBook6Element.textContent = "Глава 8: За пределами ES6"
book6.append(newBook6Element)



console.log(book5);
console.log(book6);

console.log(bookName3);
console.log(background);
console.log(book2);


console.log(books);