'use strict';

const todoControl = document.querySelector('.todo-control')

const headerInput = document.querySelector('.header-input')

const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

let toDoData = JSON.parse(localStorage.getItem("todoList1")) || [];

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach(function (item) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'
        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
            saveToLocalStorage()
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            const itemIndex = toDoData.indexOf(item)
            toDoData.splice(itemIndex, 1)
            render()
            saveToLocalStorage()
        })
    })
}
const checkField = function () {
    let error = false
    if (headerInput.value === "") {
        error = true
    }
    return !error
}
const saveToLocalStorage = function () {
    localStorage.setItem("todoList1", JSON.stringify(toDoData))
}
todoControl.addEventListener('submit', function (event) {
    event.preventDefault()
    if (checkField()) {
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
        toDoData.push(newToDo)
        headerInput.value = ''
        render()
        saveToLocalStorage()
    } else {
        alert('Пожалуйста введите задачу!')
    }

})
render()