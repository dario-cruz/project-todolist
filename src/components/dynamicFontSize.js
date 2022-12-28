const dynamicFontSize = (textLength) => {
    const baseFontSize = 9
    if (textLength >= baseFontSize) {
        textLength = baseFontSize - 2
    }
    const fontSize = baseFontSize - textLength
    return `${fontSize}vw`
}

export {dynamicFontSize}