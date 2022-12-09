import { domAppender } from "./components/domappender";
import { pageElement } from "./components/pageElement-class";
import './index.css'
import { InboxToDom } from "./inbox";
import { projectToDom } from "./components/dom-manipulation";
import { inboxProject } from "./inbox";

// Add main content div to body for all other content to append to. 
const contentDiv = document.createElement('div')
contentDiv.setAttribute('id', 'content')
document.body.append(contentDiv)


// Define the elements of the page to append,
const headerPanel = document.createElement('div')
const leftPanel = document.createElement('div')
const rightPanel = document.createElement('div')
const footerPanel = document.createElement('div')
const pageTitle = document.createElement('h1')

// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
rightPanel.setAttribute('class', 'right-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')

// Content for main page elements.
pageTitle.innerText = "Just Do It!"

// Append all the elements needed to root elements.
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(pageTitle)

projectToDom(inboxProject)

export {leftPanel, rightPanel, contentDiv, footerPanel, headerPanel}