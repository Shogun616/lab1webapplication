const elForm = document.querySelector('#contact_form');
const elName = document.querySelector('#uname');
const elMail = document.querySelector('#Email');
const elSubject = document.querySelector('#subject');
const Msg = document.querySelector('#message');
const elTerms = document.querySelector('#terms');
const elTermsHint = document.querySelector('#termsHint');
let elOutput = document.querySelector('#output');

function checkMessageForm(minLength){
    if(elSubject.value.length < minLength){
        elOutput.innerHTML = 'Subject must be ' + minLength + ' character or more';
    }
    else {
        elOutput.innerHTML = 'Message sent.';
    }
}

function checkTerms(event){
    if(!elTerms.checked){
        elTermsHint.innerHTML = 'You must agree to the terms.';
        event.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSubject.addEventListener('submit', function (){
    checkMessageForm(5);
}, false);

const user = {
    name: 'Philip Mattsson',
    mail: 'philip.mattsson@iths.se',
    subject: 'test',
    message: 'test'
}

localStorage.setItem('user', JSON.stringify(user));

document.querySelector('#output').innerHTML = localStorage.getItem('user');