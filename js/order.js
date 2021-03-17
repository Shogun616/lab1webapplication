const elAlbum = document.querySelector('#selAlbum');
const elAmount = document.querySelector('#amount')
const elForm = document.querySelector('#order_form');
const elMsg = document.querySelector('#feedback');

function calculatePrice(event){

    let price;

    switch (elAlbum.value){
        case 'Void':
            price = 99;
            break;

        case 'Hammerheart':
            price = 129;
            break;

        case 'Mutter':
            price = 99;
            break;

        case 'Tasakgo':
            price = 109;
            break;

        case 'Untitled':
            price = 159;
            break;

        case 'Mark':
            price = 69;
            break;

        case 'Bú-Tik':
            price = 159;
            break;

        case 'Gallery':
            price = 79;
            break;
    }

    let totalPrice;
    totalPrice = price* elAmount.value;

    if(totalPrice>= 500){
        totalPrice = 'Congratulation You got 10% discount ' + totalPrice*0.9 + ' kr';
    }
    else{
        totalPrice = 'Order received. Your total cost will be: ' + totalPrice + ' kr'
    }

    document.querySelector('#output').textContent = totalPrice;
    event.preventDefault();
}

elForm.addEventListener('submit', calculatePrice, false);

