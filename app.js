const formSendBtn = document.querySelector('#form-datas-button')
const emailInput = document.querySelector('#emailInput')

const formSection = document.querySelector('.form-section')
const messageSection = document.querySelector('.message-section')
const messageTextSpan = document.querySelector('.message-text-span')

const formDatasTitle = document.querySelector('.form-datas-title')
const formText = document.querySelector('.form-text')

const messageBtn = document.querySelector('#message-button')

messageBtn.addEventListener('click', dismissMessage)


var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var validation


function sendFormToServer(event) {
    event.preventDefault();
    if (emailInput.value) {
        ValidateEmail(emailInput)
        if (validation) {
            messageTextSpan.innerHTML = emailInput.value
            formSection.classList.remove('d-block')
            formSection.classList.add('d-none')
            messageSection.classList.add('d-block')
            messageSection.classList.remove('d-none')
            formText.classList.remove('d-block')
            formText.classList.add('d-none')
            emailInput.classList.add('isValid')
            emailInput.classList.remove('notValid')
        } else {
            formText.classList.remove('d-none')
            formText.classList.add('d-block')
            emailInput.classList.remove('isValid')
            emailInput.classList.add('notValid')
        }
    } else {
        formText.classList.remove('d-none')
        formText.classList.add('d-block')
        emailInput.classList.remove('isValid')
        emailInput.classList.add('notValid')
    }
}

function dismissMessage() {
    emailInput.value = ''
    formSection.classList.remove('d-none')
    formSection.classList.add('d-block')
    messageSection.classList.add('d-none')
    messageSection.classList.remove('d-block')
}

function ValidateEmail(emailInput) {
    if (emailInput.value.match(validRegex)) {
        console.log("Valid email address!")
        validation = true;
    } else {
        console.log("Invalid email address!")
        validation = false;
    }
}
