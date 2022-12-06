function domAppender(element, className, content, append) {
    append.innerHTML = `<${element} class="${className}">${content}</${element}>`    
}
 
export { domAppender }