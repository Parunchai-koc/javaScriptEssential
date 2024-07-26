let width;
let length;

function calculateArea(){
    width = parseFloat(document.getElementById('width').value);
    length = parseFloat(document.getElementById('length').value);
    let area = length * width;

    document.getElementById('result').innerHTML = `The area of the rectangle is: ${area} square-units`;
}