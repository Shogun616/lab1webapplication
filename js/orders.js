const elMyOrders= document.querySelector('#myorders');

let data=JSON.parse(localStorage.getItem("Customers"));

for(i = 0; i < data.length; i++){
    let singleContent = document.createElement("p");
    singleContent.innerHTML = 'Order details: ' + ' ' + data[i].Name +
        ' ' + data[i].UserName + ' ' + data[i].Email + ' ' + data[i].Address +
        ' ' + data[i].Post + ' ' + data[i].City + ' ' + data[i].Album;
    elMyOrders.appendChild(singleContent);
}
console.log(data);