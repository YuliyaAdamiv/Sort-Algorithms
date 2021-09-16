//Function Generate Numbers

function generateNumber(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        let readyElementForArray = addToSimpleNumberZero((getRandomNumber(0, 50)), 2);
        result.push(readyElementForArray)
    };
    let readyElement = result.join(',');
    // console.log(readyElement.split(','))
    return readyElement;
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let onClick = function() {
    let input = document.getElementById('input').value;
    let string;
    if (input === typeof string) {
        generateNumber(10)
    }
    document.getElementById('numbers').textContent = generateNumber(input);
}
onClick();

//Apply
function getValueInput() {
    let input = document.getElementById('input').value;
    console.log(input);
    let string;
    if (input === typeof string) {
        generateNumber(10)
    }
}

function validate() {
    var regex = /[ad3-9]/gi;
    var txt = document.getElementById('input').value;
    var valid = true;
    var error = '';
    if (txt.replace(/ /g, '').length == 0) {
        return;
    }
    if (regex.test(txt)) {
        if (!isNaN(txt)) {
            if (!(parseInt(txt) >= 0 && parseInt(txt) <= 30)) {
                valid = false;
                error = 'Please enter between 3 to 30.'
            }
        }
    } else {
        valid = false;
        error = 'Please enter between 3 to 30, A or D'
    }

    if (!valid) {
        alert(error);
    }
}

// Sort Element
function sortElement() {
    document.getElementById('result').innerHTML = '';
    let elementArray = document.getElementById('numbers').textContent;
    let array = [];
    array.push(elementArray);
    let arraySplit = elementArray.split(',');
    bubble(arraySplit);
    findChanges();
}
sortElement();


function showElement(arr) {
    let element = arr;
    let div = document.getElementById('result');
    let p = document.createElement('p');
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

function findChanges() {
    let myNodelist = document.querySelectorAll("p");
    document.getElementById("count").innerHTML = `Number of crocs: ${myNodelist.length - 1}`;
    for (let i = 0, j = i + 1; i < myNodelist.length - 1; i++, j++) {
        let el = myNodelist.item(i).innerHTML.split(',');
        let two = myNodelist.item(j).innerHTML.split(',');

        el.forEach((num1, index) => {
            const num2 = two[index];
            // console.log(num1, num2);
            if (num1 === num2) {
                // console.log(true)
            } else {
                // console.log(false)
                let f = document.createElement("div");
                f.innerText = num2;
                let row = myNodelist.item(i).innerHTML
                console.log(row.replace(row.match(num2), f.style.color = "red"));
                return row.replace(row.match(num2), f.style.color = "red");
            }
        });

    }

}