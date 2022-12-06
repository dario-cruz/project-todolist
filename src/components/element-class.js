class pageElement {
    constructor(type, className, content, appendToWhat) {
        this.type = type
        this.className = className
        this.content = content
        this.appendToWhat = appendToWhat
    }

    info() {
        console.log(`Type = ${type}, Class = ${this.className}, Content = ${content}, Appends to = ${this.appendToWhat}`)
    }
    changeAppend(newElem) {
        this.appendToWhat = newElem
    }
}

export { pageElement }