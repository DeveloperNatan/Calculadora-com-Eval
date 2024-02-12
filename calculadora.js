let res = document.getElementById('res');
let atual = "";

//adiciona os numeors fazendo ele se concatenar
function inserirNumero(numero) {
    atual += numero;
    res.innerHTML = atual;
}

//zerar campo resultado
function btndel() {
    atual = "";
    res.innerHTML = atual;
}

//adiciona os sinais 
function operacao(mais) {
    atual += `${mais}`;
    res.innerHTML = atual;
}

//deletar ultimo caractere
function deleteum(){
    atual = atual.slice(0, -1)
    res.innerHTML = atual;
}

//faz o calculo utilizando eval que faz com que interprete as strings como numeros e simbolos para fazer os calculos
function calcular() {
    try {
        let resultado = eval(atual);
        res.innerHTML = resultado;
        atual = resultado.toString();
    } catch (error) {
        res.innerHTML = 'Error';
    }
}

function porcentage(){
    var resul =   atual/100
    res.innerHTML = resul;
}






