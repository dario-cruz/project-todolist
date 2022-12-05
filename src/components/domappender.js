function domAppender(element, classname, content, append) {
    append.innerHTML = `<${element} class="${classname}">${content}</${element}>`    
}

export { domAppender }