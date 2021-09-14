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
    findChanges();
}
sortElement();


function showElement(arr) {
    // findChanges(arr);
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

function findChanges(arr) {
    // console.log(arr);


    // console.log(JSON.stringify(one) === JSON.stringify(two));
    // let r = document.querySelectorAll('p')
    // console.log(r.item(3))
    // const reducer = (one, two) => {
    //     console.log(one, ":", two);
    //     if (one === two) console.log("Tada!");
    //     return two;
    // };


    // one.reduce(reducer);
    // two.reduce(reducer);

    // let arr = one;

    // let check = arr.every(function(elem) {
    //     if (elem >= 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    // console.log(check);
    // let three = one.concat(two)
    // console.log(three);
    // let arrayOfNumbers = three.map(Number);
    // console.log(three.map(Number));
    countArraysOfNumbers();

}

function countArraysOfNumbers() {
    let ps = document.querySelectorAll('p');
    // console.log(ps.item(0).innerHTML);
    // console.log(ps.item(1).innerHTML);
    let one = ps.item(0).innerHTML.split(' ');
    let two = ps.item(1).innerHTML.split(',');
    console.log(one)
    console.log(two);
    one.forEach((el1) => two.forEach((el2) => {
        if (el1 === el2) {
            console.log(true);
        }
        console.log(false);

    }))
}






// const arr = [0, 7, 2, 6, 5, 9, 6, 9];
// const reducer = (accumulator, currentValue) => {
//     console.log(accumulator, ":", currentValue);
//     if (accumulator > currentValue) console.log("Tada!");
//     return currentValue;
// };


// arr.reduce(reducer);



// var arr1 = [2, 3, 4, 5, 6],
//     arr2 = [5, 10, 4, 9, 5],
//     result = arr1.reduce((r, c, i) => (r.sum = r.sum ? r.sum + c * r[i] : c * r[i], r), arr2.slice()).sum;
// console.log(result);