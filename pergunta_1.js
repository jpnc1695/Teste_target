
var indice = 12
var soma = 0
var k = 1
var resultado = []

while(k < indice){
    k = k + 1
    soma = soma + k
    resultado.push(soma)
}

// var ultimoElemento = resultado.length -1;
// console.log(ultimoElemento)
// console.log(resultado[ultimoElemento])

console.log(`O valor final de soma é: ${resultado.pop()}`)