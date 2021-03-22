const elForm = document.querySelector('#contact_form');
const elMsg = document.querySelector('#message');
const elSubject = document.querySelector('#subject');
const elFb = document.querySelector('#feedback');
const elTerms = document.querySelector('#terms');
const elTermsHint = document.querySelector('#termsHint');
let elOutput = document.querySelector('#output');


function checkTerms(event){

    let getMessage = elMsg.value;

    if(!elTerms.checked){
        elTermsHint.innerHTML = 'You must agree to the terms.';
        event.preventDefault();
    }
    else{
        elOutput.textContent = messageReady(getMessage);
    }
}

function messageReady(){

    let output;

    output = 'Message sent. We will reply to you asap';

    return output;
}

function checkSubject(minlength){
    if(elSubject.value.length < minlength){
        elFb.innerHTML = 'Subject must be ' + minlength + ' characters or more';
    }else {
        elFb.innerHTML = '';
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSubject.addEventListener('blur', function(){
    checkSubject(5);
}, false);