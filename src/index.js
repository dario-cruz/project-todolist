import { domAppender } from "./components/domappender";


const pageBody = document.body
const pageText = 'Lorem Ipsum'
const pageClass = 'main-body'
const pageElem = 'h1'
domAppender(pageElem, pageClass, pageText, pageBody)