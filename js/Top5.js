// var xhr = new XMLHttpRequest();
//
// xhr.onload = function(){
//
//     if(xhr.status == 200){
//         responseObject = JSON.parse(xhr.responseText);
//
//         var newContent = '';
//         for(var i = 0; i < responseObject.top5.length; i++){
//             newContent += '<div>';
//             newContent += responseObject.top5[i].Rank + '<br />';
//             newContent += responseObject.top5[i].Album + '<br />';
//             newContent += responseObject.top5[i].Artist + '<br />';
//             newContent += responseObject.top5[i].ReleaseDate;
//             newContent += '</div>';
//         }
//
//         document.querySelector('#content').innerHTML = newContent;
//     }
// };
//
// xhr.open('GET', 'data/data.json', true);
// xhr.send(null);

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ol = document.querySelector('#top5');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.top5);
        console.log("Show the top 5 Albums: " + data.top5[0].Album);
        let top5 = data.top5;

        return top5.map(function(top5) {
            let li = createNode('li');
            li.innerHTML = top5.Album + "<br>" + top5.Artist + "<br>" + top5.ReleaseDate;
            append(ol, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });