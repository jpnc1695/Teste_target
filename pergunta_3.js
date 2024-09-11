// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, 
// na linguagem que desejar, que calcule e retorne:

// - O menor valor de faturamento ocorrido em um dia do ano;
// - O maior valor de faturamento ocorrido em um dia do ano;
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

// a) Considerar o vetor já carregado com as informações de valor de faturamento.

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

// c) Utilize o algoritmo mais veloz que puder definir.

// var faturamentoAnual = []

function GerarCalendario(ano){
    const diasDoAno = 365
    const primeiroDiaDoAno = new Date(ano,0,1);

    return Array.from({length: diasDoAno}, (_, index) => {
        const data = new Date(primeiroDiaDoAno)
        data.setDate(data.getDate() + index);
        return data
    })
}

function calendarioFIltrado (calendario){

    return calendario.map(dia => {
        const diaDeSemana = dia.getDay()
        return diaDeSemana >= 1 && diaDeSemana <=5 ? dia : null;

    }).filter(dia => dia !== null)

}


function adicionarFaturamento(calendario){
    return calendario.map((dia) => ({
        diasDoAno: dia,
        faturamento:Math.floor(Math.random() * (2000 - 1000) + 1000)
    }))
}

var anoGerado = 2023
const anoTodo = GerarCalendario(anoGerado)
const anoFiltrado = calendarioFIltrado(anoTodo)
const diaFaturamento = adicionarFaturamento(anoFiltrado)
const maiorFaturamento = diaFaturamento.reduce(function(valor1, valor2){
    return(valor1.faturamento>valor2.faturamento)?valor1:valor2
})

const menorFaturamento = diaFaturamento.reduce(function(valor1, valor2){
    return(valor1.faturamento<valor2.faturamento)?valor1:valor2
})
const SomaValores = diaFaturamento.reduce((soma, dia) => soma + dia.faturamento, 0)
const mediaValores = Math.round(SomaValores / diaFaturamento.length)

function maiorMedia(media){
    return diaFaturamento.filter(dia => dia.faturamento > media)
}

const arrayFaturamento = maiorMedia(mediaValores)

console.log(`O menor Faturamento foi de R$${menorFaturamento.faturamento} no dia ${menorFaturamento.diasDoAno.toLocaleDateString()}`)
console.log(`O maior Faturamento foi de R$${maiorFaturamento.faturamento} no dia ${maiorFaturamento.diasDoAno.toLocaleDateString()}`)
console.log(`O número de dias que o faturamento foi acima da média foi de ${arrayFaturamento.length}`)