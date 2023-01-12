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

let telefone = 12341234;
 // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
 console.log("O telefone é " + String(telefone));

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("O telefone é " + telefone.toString()); 