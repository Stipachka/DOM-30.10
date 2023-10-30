//1

// const input = document.getElementById('input');
//         const paragraph = document.getElementById('paragraph');

//         input.addEventListener('blur', function() {
//             const inputValue = input.value;
//             paragraph.textContent += ' ' + inputValue;
//         });

//2

// const input1 = document.getElementById('input1');
//         const input2 = document.getElementById('input2');
//         const input3 = document.getElementById('input3');
//         const resultParagraph = document.getElementById('result');
//         const calculateButton = document.getElementById('Button');

//         calculateButton.addEventListener('click', function() {
//             const value1 = parseFloat(input1.value) || 0;
//             const value2 = parseFloat(input2.value) || 0;
//             const value3 = parseFloat(input3.value) || 0;

//             const sum = value1 + value2 + value3;

//             result.textContent = `Сумма: ${sum}`;
//         });

//3

// const numberInput = document.getElementById('number');
//         const result = document.getElementById('result');

//         number.addEventListener('blur', function() {
//             const inputValue = numberInput.value;
//             let sum = 0;

//             for (let i = 0; i < inputValue.length; i++) {
//                 const digit = parseInt(inputValue[i]);
//                 if (!isNaN(digit)) {
//                     sum += digit;
//                 }
//             }

//             result.textContent = `Сумма цифр: ${sum}`;
//         });

//4

// const numbers = document.getElementById('numbers');
//         const result = document.getElementById('result');

//         numbers.addEventListener('blur', function() {
//             const inputValues = numbers.value.split(',');
//             let sum = 0;

//             for (let i = 0; i < inputValues.length; i++) {
//                 const number = parseFloat(inputValues[i]);
//                 if (!isNaN(number)) {
//                     sum += number;
//                 }
//             }

//             const average = sum / inputValues.length;

//             if (!isNaN(average)) {
//                 result.textContent = `Среднее арифметическое: ${average}`;
//             } else {
//                 result.textContent = 'Некорректный ввод';
//             }
//         });

//5

// const fullNameInput = document.getElementById('fullName');
//         const lastNameInput = document.getElementById('lastName');
//         const firstNameInput = document.getElementById('firstName');
//         const middleNameInput = document.getElementById('middleName');

//         fullName.addEventListener('blur', function() {
//             const fullName = fullName.value.trim();
//             const parts = fullName.split(' ');

//             if (parts.length >= 3) {
//                 lastName.value = parts[0];
//                 firstName.value = parts[1];
//                 middleName.value = parts.slice(2).join(' ');
//             } else {
//                 alert('Некорректный ввод ФИО');
//             }
//         });

//6

// const fullName = document.getElementById('fullName');

//         fullName.addEventListener('blur', function() {
//             const fullNamee = fullName.value.trim();

//             if (fullNamee) {
//                 const formattedName = fullNamee
//                     .split(' ')
//                     .map(name => name.charAt(0).toUpperCase() + name.slice(1))
//                     .join(' ');

//                 fullName.value = formattedName;
//             }
//         });

//7

// const textInput = document.getElementById('text');
//         const word = document.getElementById('word');

//         text.addEventListener('blur', function() {
//             const text = text.value.trim();
//             const words = text.split(/\s+/);
//             const count = words.length;

//             word.textContent = `Количество слов: ${count}`;
//         });

//8

// const dateInput = document.getElementById('date');

//         dateInput.addEventListener('blur', function() {
//             const inputDate = dateInput.value;
//             const dateParts = inputDate.split('.');
            
//             if (dateParts.length === 3) {
//                 const day = dateParts[0];
//                 const month = dateParts[1];
//                 const year = dateParts[2];
                
//                 const formattedDate = `${year}-${month}-${day}`;
                
//                 dateInput.value = formattedDate;
//             }
//         });

//9

// const wordInput = document.getElementById('word');
//         const checkButton = document.getElementById('button');
//         const result = document.getElementById('result');

//         checkButton.addEventListener('click', function() {
//             const word = wordInput.value.toLowerCase(); // Приводим к нижнему регистру для учета регистра
//             const reversedWord = word.split('').reverse().join(''); // Переворачиваем слово
            
//             if (word === reversedWord) {
//                 result.textContent = 'одинаково.';
//             } else {
//                 result.textContent = 'не одинаково.';
//             }
//         });

//10

// const numberInput = document.getElementById('number');
//         const result = document.getElementById('result');

//         numberInput.addEventListener('blur', function() {
//             const number = number.value;

//             if (number.includes('3')) {
//                 result.textContent = 'Число содержит цифру 3.';
//             } else {
//                 result.textContent = 'Число не содержит цифру 3.';
//             }
//         });

//11

// const addNumbersButton = document.getElementById('addNumbersButton');
//         const paragraphs = document.querySelectorAll('p');

//         addNumbersButton.addEventListener('click', function() {
//             paragraphs.forEach(function(paragraph, index) {
//                 paragraph.textContent += ' (' + (index + 1) + ')';
//             });
//         });

//12

// const button = document.getElementById('button');
//         const links = document.querySelectorAll('a');

//         button.addEventListener('click', function() {
//             links.forEach(function(link) {
//                 const href = link.getAttribute('href');
//                 link.textContent += ' (' + href + ')';
//             });
//         });

//13

// const button = document.getElementById('button');
//         const links = document.querySelectorAll('a');

//         button.addEventListener('click', function() {
//             links.forEach(function(link) {
//                 const href = link.getAttribute('href');
//                 if (href.startsWith('http://')) {
//                     link.textContent += ' →';
//                 }
//             });
//         });

//14

// const calculateSquaresButton = document.getElementById('squares');
//         const paragraphs = document.querySelectorAll('p');

//         calculateSquaresButton.addEventListener('click', function() {
//             paragraphs.forEach(function(paragraph) {
//                 const number = parseFloat(paragraph.textContent);
//                 if (!isNaN(number)) {
//                     paragraph.textContent = Math.pow(number, 2);
//                 }
//             });
//         });

//15

// const dateInput = document.getElementById('date');
//         const dayOfWeekParagraph = document.getElementById('dayOfWeek');

//         date.addEventListener('blur', function() {
//             const inputDate = date.value;
//             const dateParts = inputDate.split('.');
//             if (dateParts.length === 3) {
//                 const day = parseInt(dateParts[0], 10);
//                 const month = parseInt(dateParts[1], 10) - 1; // Месяцы в JavaScript начинаются с 0 (0 = Январь, 1 = Февраль и т.д.)
//                 const year = parseInt(dateParts[2], 10);

//                 const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//                 const dateObject = new Date(year, month, day);
//                 const dayIndex = dateObject.getDay();

//                 if (dayIndex >= 0 && dayIndex < daysOfWeek.length) {
//                     dayOfWeekParagraph.textContent = daysOfWeek[dayIndex];
//                 }
//             }
//         });

//16

// const input = document.getElementById('input');
//         const incrementButton = document.getElementById('increment');
//         const decrementButton = document.getElementById('decrement');

//         incrementButton.addEventListener('click', function() {
//             input.value = parseInt(input.value, 10) + 1;
//         });

//         decrementButton.addEventListener('click', function() {
//             const currentValue = parseInt(input.value, 10);
//             if (currentValue > 0) {
//                 input.value = currentValue - 1;
//             }
//         });

//17

// const input = document.getElementById('input');
//         const paragraphs = document.querySelectorAll('p');
//         let clickCount = 0;

//         paragraphs.forEach(paragraph => {
//             paragraph.addEventListener('click', function() {
//                 clickCount++;
//                 input.value = clickCount;
//             });
//         });

//18

// const divs = document.querySelectorAll('.text-div');

//         divs.forEach(div => {
//             const text = div.textContent.trim();
//             if (text.length > 10) {
//                 const trimmedText = text.slice(0, 10) + '...';
//                 div.textContent = trimmedText;
//             }
//         });

//19

// document.getElementById('generate-button').addEventListener('click', function() {
//     const characters = 'АдикЛёняИгорёкСТЕПАНВолкановскиМахачевНганнуФьюри';
//     let randomString = '';
//     for (let i = 0; i < 8; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters.charAt(randomIndex);
//     }
//     document.getElementById('random-string-input').value = randomString;
// });

//20

// document.getElementById('shuffle-button').addEventListener('click', function() {
//     const inputField = document.getElementById('input-field');
//     const inputValue = inputField.value;
//     const shuffledValue = shuffleString(inputValue);
//     inputField.value = shuffledValue;
// });

// function shuffleString(input) {
//     const inputArray = input.split('');
//     for (let i = inputArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
//     }
//     return inputArray.join('');
// }

//21

// document.getElementById('convert-button').addEventListener('click', function() {
//     const fahrenheitInput = document.getElementById('fahrenheit-input');
//     const resultParagraph = document.getElementById('result-paragraph');

//     const fahrenheit = parseFloat(fahrenheitInput.value);

//     if (!isNaN(fahrenheit)) {
//         const celsius = (fahrenheit - 32) * 5/9;
//         result.textContent = `Температура в Цельсияx: ${celsius.toFixed(2)}°C`;
//     } else {
//         result.textContent = 'Bведите корректное значение в Фаренгейтаx.';
//     }
// });

//22

// document.getElementById('calculate-button').addEventListener('click', function() {
//     const numberInput = document.getElementById('number-input');
//     const resultParagraph = document.getElementById('result-paragraph');

//     const number = parseInt(numberInput.value);

//     if (!isNaN(number) && number >= 0) {
//         let factorial = 1;
//         for (let i = 1; i <= number; i++) {
//             factorial *= i;
//         }
//         resultParagraph.textContent = `Факториал числа ${number} равен ${factorial}`;
//     } else {
//         resultParagraph.textContent = 'Bведите неотрицательное целое число.';
//     }
// });

//23

document.getElementById('button').addEventListener('click', function() {
    const aInput = document.getElementById('a');
    const bInput = document.getElementById('b');
    const cInput = document.getElementById('c');
    const resultParagraph = document.getElementById('result-paragraph');

    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        const discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultParagraph.textContent = `Корни уравнения: x1 = ${root1}, x2 = ${root2}`;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            resultParagraph.textContent = `Уравнение имеет один корень: x = ${root}`;
        } else {
            resultParagraph.textContent = 'Уравнение не имеет действительных корней.';
        }
    } else {
        resultParagraph.textContent = 'Введите числовые значения для коэффициентов.';
    }
});