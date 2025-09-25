// Atividade 5: Função para converter Celsius em Fahrenheit.
function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // 32

// Atividade 6: Função para verificar se um número é par ou ímpar.
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }

}
console.log(parOuImpar(4));

const numero = 7; // Exemplo de número
console.log(`O número ${numero} é ${parOuImpar(numero)}.`); // Exibe o resultado no console
// Atividade 07: Encontrar o maior entre três números.
function maiorDeTres(num1, num2, num3) { // Função para encontrar o maior entre três números
    let maior = num1; // Assume que o primeiro número é o maior inicialmente
    if (num2 > maior) { // Compara com o segundo número 
        maior = num2; // Atualiza o maior se o segundo for maior
    }
    if (num3 > maior) { // Compara com o terceiro número
        maior = num3; // Atualiza o maior se o terceiro for maior
    }
    return maior; // Retorna o maior número encontrado

}
const n1 = 10; // Exemplo de três números 
const n2 = 25;  
const n3 = 15;
console.log(`O maior número entre ${n1}, ${n2} e ${n3} é ${maiorDeTres(n1, n2, n3)}.`); // Exibe o resultado no console

let soma = 0; // Variável para armazenar a soma dos números
let numeroInput; // Variável para armazenar o número digitado pelo usuário
do { // Inicia um loop que continuará até o usuário digitar 0
    numeroInput = parseInt(prompt("Digite um número (ou 0 para sair):")); // Solicita ao usuário que digite um número
    soma += numeroInput; // Adiciona o número digitado à soma
}
while (numeroInput !== 0); // Continua o loop enquanto o número digitado não for 0
console.log(`A soma dos números digitados é: ${soma}`); // Exibe a soma dos números no console

//mostrar a tabuada de um numero de 1 a 10
const numeroTabuada = 5; // Número para o qual queremos mostrar a tabuada
console.log(`Tabuada de ${numeroTabuada}:`); // Exibe o título da tabuada no console
for (let i = 1; i <= 10; i++) { // Loop de 1 a 10
    const resultado = numeroTabuada * i; // Calcula o resultado da multiplicação
    console.log(`${numeroTabuada} x ${i} = ${resultado}`); // Exibe a multiplicação e o resultado no console
}   
console.log("Tabuada concluída."); // Indica que a tabuada foi concluída

// leia dois números e mostre o maior
const numA = parseFloat(prompt("Digite o primeiro número:")); // Solicita ao usuário que digite o primeiro número
const numB = parseFloat(prompt("Digite o segundo número:")); // Solicita ao usuário que digite o segundo número
if (numA > numB) { // Compara os dois números
    console.log(`O maior número é: ${numA}`); // Exibe o primeiro número se for maior
}
else if (numB > numA) { // Compara os dois números
    console.log(`O maior número é: ${numB}`); // Exibe o segundo número se for maior
}
else {
    console.log("Os dois números são iguais."); // Indica que os números são iguais
}
//ler 10 numeros e mostre quantos são pares
let countPares = 0; // Variável para contar quantos números pares foram digitados
for (let i = 0; i < 10; i++) { // Loop para ler 10 números
    const numeroLido = parseInt(prompt(`Digite o número ${i + 1}:`)); // Solicita ao usuário que digite um número
    if (numeroLido % 2 === 0) { // Verifica se o número é par
        countPares++; // Incrementa o contador se o número for par
    }
}
console.log(`Você digitou ${countPares} números pares.`); // Exibe a quantidade de números pares digitados      
