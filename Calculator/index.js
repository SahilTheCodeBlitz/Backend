let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero")
let add = document.getElementById("plus")
let minus= document.getElementById("minus")
let division = document.getElementById("division")
let dot = document.getElementById("dot")
let multiplication = document.getElementById("multiplication") 
let equal = document.getElementById("equal") 


let string = '';
let display = document.getElementById("numss")

one.addEventListener('click', () => {
    console.log('1');

    string += '1';
    display.textContent = string
});

two.addEventListener('click', () => {
    console.log('2');
    string += '2';
    display.textContent = string
});

three.addEventListener('click', () => {
    console.log('3');
    string += '3';
    display.textContent = string
});

four.addEventListener('click', () => {
    console.log('4');
    string += '4';
    display.textContent = string
});

five.addEventListener('click', () => {
    console.log('5');
    string += '5';
    display.textContent = string
});

six.addEventListener('click', () => {
    console.log('6');
    string += '6';
    display.textContent = string
});

seven.addEventListener('click', () => {
    console.log('7');
    string += '7';
    display.textContent = string
});

eight.addEventListener('click', () => {
    console.log('8');
    string += '8';display.textContent = string
});

nine.addEventListener('click', () => {
    console.log('9');
    string += '9';
    display.textContent = string
});

zero.addEventListener('click', () => {
    console.log('0');
    string += '0';
    display.textContent = string
});

add.addEventListener('click', () => {
    console.log('+');
    string += '+';
    display.textContent = string
});

minus.addEventListener('click', () => {
    console.log('-');
    string += '-';
    display.textContent = string
});

division.addEventListener('click', () => {
    console.log('/');
    string += '/';
    display.textContent = string
});

dot.addEventListener('click', () => {
    console.log('.');
    string += '.';
    display.textContent = string
});

multiplication.addEventListener('click', () => {
    console.log('*');
    string += '*';
    display.textContent = string
});

equal.addEventListener('click', () => {
    let data = string;
    console.log(data);
    let result = eval(data);
    console.log(result);
    display.textContent = `${result}`
    string = '';  
});
