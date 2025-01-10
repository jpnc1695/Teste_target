// var Sp = 67836.43
// var Rj = 36676.66
// var Mg = 29229.88
// var Es = 27165.48
// var outros = 19849.53

var faturamento = [
    {
        cidade: "Sp",
        faturamento: 67836.43
    },
    {
        cidade: "Rj",
        faturamento: 36676.66
    },
    {
        cidade: "Mg",
        faturamento: 29229.88
    },
    {
        cidade: "Es",
        faturamento:  27165.48
    },
    {
        cidade: "Outros",
        faturamento: 19849.53
    },
]

function calculoFaturamentoTotal() {
    return faturamento.reduce((acumulador, valorAtual) => acumulador + valorAtual.faturamento, 0);
}

var valorFaturamentoTotal = calculoFaturamentoTotal()

function calcularPorcentagemDoFaturamento (faturamentoTotal){
    const porcentagens = faturamento.map(item => {
        const porcentagem = (item.faturamento / faturamentoTotal) * 100;
        return {
            cidade: item.cidade,
            faturamento: item.faturamento,
            porcentagem: porcentagem.toFixed(2) // Arredondar para 2 casas decimais
        };
    });

    return porcentagens;
}

console.log(calcularPorcentagemDoFaturamento(valorFaturamentoTotal))