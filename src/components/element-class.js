class pageElement {
    constructor(type, className, content, appendToWhat) {
        this.type = type
        this.className = className
        this.content = content
        this.appendToWhat = appendToWhat
    }
    info() {
        console.log(`Type = ${this.type}, Class = ${this.className}, Content = ${content}, Appends to = ${this.appendToWhat}`)
    }
    changeAppend(newElem) {
        this.appendToWhat = newElem
    }
    appendElement() {
        let elemToAppendTo = document.querySelector('class', this.appendToWhat)
        elemToAppendTo.innerHTML = `<${this.type} class="${this.className}">${this.content}</${this.type}>`
    }
}

export { pageElement }