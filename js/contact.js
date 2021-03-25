const elForm = document.querySelector('#contact_form');
const elName = document.querySelector('#Name');
const elMail = document.querySelector('#mail');
const elMsg = document.querySelector('#message');
const elSubject = document.querySelector('#subject');
let elOutput = document.querySelector('#output');

let supportArrays = [];
let support = {Name: "", Email: "", Subject: "", Message: ""};

let data = JSON.parse(localStorage.getItem("Support"));

console.log(data);

function checkContactForm(minLength){

    if(elName.value === ""){
        elOutput.innerHTML = 'Name field can not be empty!';
    }
    else if(elMail.value === ""){
        elOutput.innerHTML = 'E-mail field can not be empty!';
    }
    else if(elSubject.value.length !== minLength){
        elOutput.innerHTML = 'Subject field can not be empty!';
    }
    else if(elMsg.value === ""){
        elOutput.innerHTML = 'Message field can not be empty!';
    }
    else {
        elOutput.innerHTML = ' <br>' +
            'Name: ' + elName.value + '<br>' +
            'E-Mail: '+ elMail.value + '<br>' +
            'Subject: ' + elSubject.value + '<br>' +
            'Message: ' + elMsg.value + '<br>' +
            'We will reply to you asap!';
        support.Name = elName.value;
        support.Email = elMail.value;
        support.Subject = elSubject.value;
        support.Message = elMsg.value;
        supportArrays.push(support);

        if(localStorage.getItem("Support") === null){
            localStorage.setItem("Support", JSON.stringify(supportArrays));
        }
        else {
            let newArray = JSON.parse([localStorage.getItem("Support")]);
            newArray.push(support);
            localStorage.setItem("Support", JSON.stringify(newArray));
        }
    }
}

elForm.addEventListener('submit', function (e){
    e.preventDefault();
    checkContactForm(4);
}, false);