class domElement {
    constructor(elemType, elemClass) {
        this.elemType = elemType
        this.elemClass = elemClass
    }

    set elemId(givenId) {
        this.elemId = givenId
    }
    
    set elemInnerText(givenText) {
        this.elemInnerText = givenText
    }
    
    setAttribute(givenAtt, givenAttVal) {

    }
    
    createElement(elementToAppendTo) {
        let createdElement = document.createElement(`${this.elemType}`)
        createdElement.setAttribute('class', `${this.elemClass}`)
        
        if (this.elemId !== null) {
            createdElement.setAttribute('id', `${this.elemId}`)
        }
        
        if (this.elemInnerText !== null) {
            createdElement.innerText = `${this.elemInnerText}`
        }

        elementToAppendTo.appendChild(createdElement)
    } 
}