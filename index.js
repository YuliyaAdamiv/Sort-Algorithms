//Function Generate Numbers

function generateNumber(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


let onClick = function() {
    document.getElementById('numbers').textContent = generateNumber(10);
}
onClick();


// Sort Element
function sortElement() {
    document.getElementById('result').innerHTML = '';
    let el = document.getElementById('numbers').textContent;
    let a = el.split('');
    bubble(a);
}
sortElement();

function showElement(arr) {

    let element = arr;
    let div = document.getElementById('result')
    let p = document.createElement('p')
    p.append(element);
    div.appendChild(p);
    return element;
}