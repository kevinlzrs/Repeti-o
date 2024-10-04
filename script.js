function iniciarContagem() { //função para iniciar a contagem regressiva
    let numero = document.getElementById("numeroInicial").value;
    //obtém o valor do número inserido pelo usuario
     let resultado = document.getElementById("resultado");
     //seleciona o elemento onde o resultado será exibido
     resultado.innerHTML = "";
     //limpa o resultado anterior

     do { //inicia a estrutura de repetição
        resultado.innerHTML += numero + "<br>";
        //adiciona o número atual ao resultado
        numero--;
        //decrementa o numero
     } while (numero >= 0);
     //condição: a contagem continua até o número ser menor que 0
}