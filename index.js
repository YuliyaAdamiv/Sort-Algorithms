//Function Generate Numbers
let sortSteps = [];

function addStep(step) {
    sortSteps.push(step);
}

function generateNumber(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        let readyElementForArray = addToSimpleNumberZero((getRandomNumber(0, 50)), 2);
        result.push(readyElementForArray)
    };
    let readyElement = result.join(',');
    return readyElement;
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let onClick = function() {
    let input = document.getElementById('input').value;
    document.getElementById('numbers').textContent = generateNumber(input);
}
onClick();

//Apply
function getValueInput() {
    let min = document.getElementById('min').value;
    console.log(min);
    let max = document.getElementById('max').value;
    console.log(max);
    let value = max - min;
    console.log(value);
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
    console.log(sortSteps)
    document.getElementById("count").innerHTML = `Number of steps: ${sortSteps.length - 1}`;
    for (let i = 0, j = i + 1; i < sortSteps.length - 1; i++, j++) {
        let el = sortSteps[i].slice()
        let two = sortSteps[j].slice()

        two.forEach((num2, index) => {
            const num1 = el[index];
            console.log(num1, num2, num1 === num2);
            if (num1 === num2) {
                // console.log(true)
            } else {
                // console.log(false)
                let span = document.createElement("span");
                span.textContent = num2;
                span.insertAdjacentHTML('beforeend', '!');
                two[index] = span.innerHTML;

            }

        });
        console.log(j)
        showElement(two);

    }

}
//  - додати слайдер, на якому можна вибрати мінімальне і максимальне числа. Обмеження від 0 до 1000. Це числа, які генеруються(так як зараз від 0 до 50). Коли нажимаємо кнопку «Apply”, то генеруються числа в вибраному діапазоні
// - всі ці поля мають бути зліва сторінки(третина). Інші дві третини - це початковий масив і покрокові зміни до сортування(так як зараз знизу виводяться)
// - коли посортувало, вивести число - скільки всього кроків зайняло сортування

(function() {

    var parent = document.querySelector(".price-slider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function(el) {
        el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();