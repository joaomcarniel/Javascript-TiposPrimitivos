// conversão implícita

const numero = 456;
const numeroString = "456";

// comparação do valor armazenado e do tipo da variavel, por isso retorna falso
// pois string é diferente de int
console.log(numero === numeroString);

// Comparação apenas do valor armazenado na variavel, por isso retorna true
// pois o valor 456 se repete nas duas variáveis
console.log(numero == numeroString);

// Apenas concatena pois uma das variaveis é string
console.log(numero + numeroString)


// conversão explícita
console.log(numero + Number(numeroString))

