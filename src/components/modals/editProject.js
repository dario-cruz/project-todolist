import { attributeHelper } from "../../helpers/attributeHelper"

// Modal Container
const editProjectContainer = document.createElement('div')
attributeHelper(editProjectContainer, {'id':'edit-project-container'})

// Modal Content
const editProjectContent = document.createElement('div')
attributeHelper(editProjectContent, {'id':'edit-project-content'})

// Modal Form
const editProjectForm = document.createElement('form')
attributeHelper(editProjectForm, {'id':'edit-project-form', 'action':''})

// Form Inputs
const editProjectNameLabel = document.createElement('label')
const editProjectName = document.createElement('input')
attributeHelper(editProjectName, {'type':'text', 'required':''})