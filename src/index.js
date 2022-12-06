import { domAppender } from "./components/domappender";
import { pageElement } from "./components/element-class";

const pageBody = document.body
const pageText = 'Lorem Ipsum'
const pageClass = 'main-body'
const pageElem = 'h1'
domAppender(pageElem, pageClass, pageText, pageBody)

const newHeading =  new pageElement('h1', 'index-heading', 'The quick brown fox jumped over the lazy dog.')

domAppender(newHeading.type, newHeading.classname, newHeading.content, pageBody)