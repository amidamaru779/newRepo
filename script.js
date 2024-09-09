function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElem();

}
DomElement.prototype.createElem = function () {
    let elem;
    if (this.selector.startsWith('.')) {
        elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith('#')) {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
    }

    elem.style.height = this.height;
    elem.style.width = this.width;
    elem.style.backgroundColor = this.bg;
    elem.style.fontSize = this.fontSize;
    elem.textContent = 'Hello, world!';
    document.body.append(elem);
};
const newElement = new DomElement('.block', '100px', '200px', 'red', '12px')
const newElement1 = new DomElement('#block', '100px', '200px', 'blue', '20px')