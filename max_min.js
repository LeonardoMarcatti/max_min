function Maior(vals) { 
    let maior = vals.sort((a, b) =>{return (b-a)});
    return maior[0];
};

function Menor(vals) { 
    let menor = vals.sort((a, b) =>{return (a-b)});
    return menor[0];
};

function Calcular() {
    document.getElementById('array').innerHTML += document.getElementById('valores').value;
    document.getElementById('maior').innerHTML += Maior(myarray);;
    document.getElementById('menor').innerHTML += Menor(myarray);
    document.getElementById('calcular').setAttribute('disabled', '');
    
 };

 function limpar() {
     myarray = [];
     document.getElementById('array').innerHTML = 'Seu array de números é: ';
     document.getElementById('maior').innerHTML = 'Maior número: ';
     document.getElementById('menor').innerHTML = 'Menor número: ';
     document.getElementById('calcular').removeAttribute('disabled');
 }

let myarray = [];
function Add() {
    let valor = document.getElementById('valor').value;
    let valores = document.getElementById('valores').value;

    if (valores == '') {
        document.getElementById('valores').value = valor;
    } else {
        document.getElementById('valores').value += ', ' + document.getElementById('valor').value;
    };
    myarray.push(Number(document.getElementById('valor').value));
};

document.getElementById('add').addEventListener('click', Add);
document.getElementById('calcular').addEventListener('click', Calcular);
document.getElementById('limpar').addEventListener('click', limpar);