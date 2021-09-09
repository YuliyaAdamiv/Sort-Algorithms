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
    document.getElementById('uuid').textContent = generateNumber(10);
}
onClick();

//Sort Element

let elementSort = document.getElementById('uuid').textContent;
let arr = elementSort.split('');

let bubble = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        showElement(arr);
    }
    return arr;
};
bubble(arr);


function showElement() {
    let element = arr;
    for (let i = 0; i < element.length; i++) {
        let div = document.createElement('div');
        let row = element;
        div.appendChild(document.createTextNode(row));
        document.body.appendChild(div);
    }
    return element;
}