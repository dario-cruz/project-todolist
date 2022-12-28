// Allows for dynamic sizing of text, based off of the length of the text.
// Used for keeping project list and task notes from overflowing out  of the containing div. 
const dynamicFontSize = (textLength) => {
    const baseFontSize = 9
    if (textLength >= baseFontSize) {
        textLength = baseFontSize - 2
    }
    const fontSize = baseFontSize - textLength
    return `${fontSize}rem`
}

export {dynamicFontSize}