// 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, 
// a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. 
// Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

// a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
// b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, 
// pois ele não possui dispositivo de cobrança de pedágio.
// c)Explique como chegou no resultado.

function calcularEncontro (velocidadeCaminhao, velocidadeCarro, distanciatotal, tempoPedagio){
  const tempoSemPedagioCarro = distanciatotal / velocidadeCarro;
  const tempoTotalCarro = tempoSemPedagioCarro + (tempoPedagio / 60);
  const velocidadeMediaCarro = distanciatotal / tempoTotalCarro;

  const kmEncontro = (velocidadeCaminhao * distanciatotal) / (velocidadeCaminhao + velocidadeMediaCarro);

  return kmEncontro.toFixed(0)

}

// Exemplo de uso:
const velocidadeCarro = 90; // km/h
const velocidadeCaminhao = 80; // km/h
const distanciaTotal = 125; // km
const tempoPedagio = 15; // minutos


var encontroKm = calcularEncontro(velocidadeCaminhao, velocidadeCarro, distanciaTotal, tempoPedagio)



console.log(`Os veículos se encontram no km ${encontroKm} e estão a mesma distância de Ribeirão Preto. `)


