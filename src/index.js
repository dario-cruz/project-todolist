import { domAppender } from "./components/domappender";
import { pageElement } from "./components/element-class";
import './index.css'

const contentDiv = document.getElementById('content')

const leftPanel = document.createElement('div')
const rightPanel = document.createElement('div')

leftPanel.setAttribute('class', 'left-panel')
rightPanel.setAttribute('class', 'right-panel')

contentDiv.append(leftPanel, rightPanel)
