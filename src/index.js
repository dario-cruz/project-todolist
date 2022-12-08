import { domAppender } from "./components/domappender";
import { pageElement } from "./components/element-class";
import './index.css'
import { InboxToDom } from "./inbox";

// Add main content div to body for all other content to append to. 
const contentDiv = document.createElement('div')
contentDiv.setAttribute('id', 'content')
document.body.append(contentDiv)


// Define the elements of the page to append,
const headerPanel = document.createElement('div')
const leftPanel = document.createElement('div')
const rightPanel = document.createElement('div')
const footerPanel = document.createElement('div')

// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
rightPanel.setAttribute('class', 'right-panel')
footerPanel.setAttribute('class', 'footer-panel')

contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
InboxToDom()

export {leftPanel, rightPanel, contentDiv, footerPanel, headerPanel}