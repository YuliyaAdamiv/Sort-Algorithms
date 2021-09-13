//Function Generate Numbers

function generateNumber(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        let readyElementForArray = addToSimpleNumberZero((getRandomNumber(0, 50)), 2);
        result.push(readyElementForArray)
    };
    let readyElement = result.join(' ');
    return readyElement;
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let onClick = function() {
    document.getElementById('numbers').textContent = generateNumber(10);
}
onClick();


// Sort Element
function sortElement() {
    document.getElementById('result').innerHTML = '';
    let elementArray = document.getElementById('numbers').textContent;
    let array = [];
    array.push(elementArray);
    let arraySplit = elementArray.split(' ');
    bubble(arraySplit);

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

function addToSimpleNumberZero(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}