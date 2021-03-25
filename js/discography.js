const elName = document.querySelector('#Name');
const elUname = document.querySelector('#Username');
const elMail = document.querySelector('#mail');
const elAddress = document.querySelector('#address');
const elPost = document.querySelector('#post');
const elCity = document.querySelector('#city');
const elAlbum = document.querySelector('#selAlbum');
const elForm = document.querySelector('#order_form');
let elOutput = document.querySelector('#output');

let orderArrays = [];
let customer = {Name: "", UserName: "", Email: "", Address: "", Post: "", City: "", Album: ""};

let data = JSON.parse(localStorage.getItem("Customers"));

console.log(data);

function checkOrderForm(minLength){
    console.log(typeof elPost.value);
    if(elName.value === ""){
        elOutput.innerHTML = 'Name field can not be empty!';
    }
    else if(elUname.value === ""){
        elOutput.innerHTML = 'Name field can not be empty!';
    }
    else if(elMail.value === ""){
        elOutput.innerHTML = 'E-mail field can not be empty!';
    }
    else if(elAddress.value === ""){
        elOutput.innerHTML = 'Address field can not be empty!';
    }
    else if(elPost.value.length !== minLength || (/\D/.test(elPost.value))){
        elOutput.innerHTML = 'Postal code must be ' + minLength + ' digits!';
    }
    else if(elCity.value === ""){
        elOutput.innerHTML = 'City field can not be empty!';
    }
    else {
        elOutput.innerHTML = 'Order received. <br>' +
        'Order Details: <br>' +
        'Name: ' + elName.value + '<br>' + 'UserName: ' +  elUname.value + '<br>' +
        'E-Mail: '+ elMail.value + '<br>' +
        'Address: ' + elAddress.value + '<br>' +
        'Postal Code: ' + elPost.value + '<br>' +
        'City: ' + elCity.value + '<br>' +
        'Album: ' + elAlbum.value + '<br>' +
        'We will ship the order asap!';
        customer.Name = elName.value;
        customer.UserName = elUname.value;
        customer.Email = elMail.value;
        customer.Address = elAddress.value;
        customer.Post = elPost.value;
        customer.City = elCity.value;
        customer.Album = elAlbum.value;
        orderArrays.push(customer);

        if(localStorage.getItem("Customers") === null){
            localStorage.setItem("Customers", JSON.stringify(orderArrays));
        }
        else {
            let newArray = JSON.parse([localStorage.getItem("Customers")]);
            newArray.push(customer);
            localStorage.setItem("Customers", JSON.stringify(newArray));
        }
    }
}

elForm.addEventListener('submit', function (e){
    e.preventDefault();
    checkOrderForm(5);
}, false)