'use strict'

class First {
    sayHello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {
    sayHello() {
        super.sayHello()
        console.log('А я наследуемый метод!');
    }
}
const objFirst = new First()
objFirst.sayHello()

const objSecond = new Second()
objSecond.sayHello()