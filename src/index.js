import { domAppender } from "./components/domappender";
import { pageElement } from "./components/element-class";
import './index.css'

// Define the elements of the page to append,
const contentDiv = document.getElementById('content')
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
