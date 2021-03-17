const elForm = document.querySelector('#contact_form');
const elMsg = document.querySelector('#feedback');

function sendMessage(event){

    elMsg.innerHTML = 'Message sent. We will reply to you as soon as possible.'
    event.preventDefault();
}

elForm.addEventListener('submit', sendMessage, false);