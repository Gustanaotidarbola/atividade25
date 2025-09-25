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