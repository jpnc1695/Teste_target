// 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, 
// a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. 
// Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

// a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
// b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, 
// pois ele não possui dispositivo de cobrança de pedágio.
// c)Explique como chegou no resultado.

// Dados do problema
const distanciaTotal = 125; // km
const velocidadeCarro = 90; // km/h
const velocidadeCaminhao = 80; // km/h
const tempoPedagioCarro = 15; // minutos

// Função para calcular a distância percorrida por um veículo em um determinado tempo
// function calcularDistancia(velocidade, tempo) {
//   return velocidade * tempo / 60; // Convertendo tempo para horas
// }

// // Simulação do movimento (simplificada)
// let tempo = 0;
// let distanciaCarro = 0;
// let distanciaCaminhao = distanciaTotal;

// while (distanciaCarro < distanciaCaminhao) {
//   tempo++;

//   // Atualizando as distâncias percorridas
//   distanciaCarro += calcularDistancia(velocidadeCarro, 1); // A cada iteração, considera-se 1 minuto
//   distanciaCaminhao -= calcularDistancia(velocidadeCaminhao, 1);

//   // Verificando se houve cruzamento
//   if (distanciaCarro >= distanciaCaminhao) {
//     console.log("Os veículos se cruzaram após", tempo, "minutos.");
//     console.log("Ambos estão a", distanciaCarro, "km de Ribeirão Preto.");
//     break;
//   }

//   // Verificando se o carro passou por um pedágio
//   if (tempo % 15 === 0) { // A cada 15 minutos (assumindo que os pedágios estão a cada 22,5 km)
//     tempo += tempoPedagioCarro;
//   }

//   console.log(`tempo: ${tempo}`)
// }

function calculaTempoViagem(velocida, distancia) {

      return tempoViagem = distancia / velocida
}

function converterMinutos(tempo){
   return tempo * 60
}


var tempoCarro = calculaTempoViagem(velocidadeCarro, distanciaTotal).toFixed(2)
var tempoCaminhao = calculaTempoViagem(velocidadeCaminhao, distanciaTotal).toFixed(2)

var tempoCarroMinutos = parseInt(converterMinutos(tempoCarro).toFixed(0))
var tempoCaminhaoMinutos = parseInt(converterMinutos(tempoCaminhao).toFixed(0))


var tempoCarroTotal = tempoCarroMinutos + tempoPedagioCarro

console.log(`tempo Carro : ${tempoCarroTotal}`)
console.log(`tempo Caminhão : ${tempoCaminhaoMinutos}`)




