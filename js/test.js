const buttons = document.querySelectorAll('btn');
const output = document.getElementById('output');

function display(val){

    output.value += val;

    return val;

}
display();
function solve(){

    let x = document.getElementById('output').value

    let y = eval(x);

    document.getElementById('output').value = y

    return y

}
solve();
function clearScreen(){

    document.getElementById('result').value = ''

}