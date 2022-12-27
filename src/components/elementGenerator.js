class domElement {
    constructor(elemType, elemClass) {
        this.elemType = elemType
        this.elemClass = elemClass
        this.attributeList = []
    }

    set elemId(givenId) {
        this.elemId = givenId
    }
    
    set elemInnerText(givenText) {
        this.elemInnerText = givenText
    }

    setAttribute(givenAtt, givenAttVal) {
        let attributeObj = {attribute:givenAtt, attributeValue:givenAttVal}
        this.attributeList.push(attributeObj)
    }
    
    get list() {
        return this.attributeList
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

        if (this.attributeList.length > 0) {
            this.attributeList.forEach(element => {
                createdElement.setAttribute(`${element.attribute}`, `${element.attributeValue}`)
            });
        }

        elementToAppendTo.appendChild(createdElement)
    } 
}

export {domElement}