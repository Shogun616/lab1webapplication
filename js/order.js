const elAlbum = document.querySelector('#selAlbum');
const elAmount = document.querySelector('#amount')
const elForm = document.querySelector('#order_form');
let elOutput = document.querySelector('#output');

function albumOrder(event){
    let inAntal = elAmount.value;
    let getAlbumChoice = elAlbum.value;

    if(inAntal.length < 1){
        elOutput.textContent = 'You must order at least 1 album.';
    }
    else {
        elOutput.textContent = albumFinishedOrder(getAlbumChoice, inAntal);
    }

    event.preventDefault();
}
function albumFinishedOrder(albumChoice, antal){

    let price;
    let totalPrice = 0;
    let output = '';

    switch (elAlbum.value){
        case 'We Are The Void':
            price = 99;
            break;

        case 'Hammerheart':
            price = 129;
            break;

        case 'Mutter':
            price = 99;
            break;

        case 'Tasakgo Army':
            price = 109;
            break;

        case 'Untitled':
            price = 159;
            break;

        case 'Under the Sign of the Black Mark':
            price = 69;
            break;

        case 'Bú-Tik':
            price = 159;
            break;

        case 'The Gallery':
            price = 79;
            break;
    }

    totalPrice = antal* price;

    output = 'You ordered ' + antal +'  '+ albumChoice + '. Total Price: ' + totalPrice + ' kr. ';

    if(totalPrice>= 500){
        let discount = totalPrice * 0.9;
        output = output + ' Congratulation, you get 10% discount. You will now pay: ' + discount + ' kr.';
    }

    return output;
}

elForm.addEventListener('submit', albumOrder, false);