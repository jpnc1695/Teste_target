const str = "Hello World!";
function reverterString (x){
    return Array.from(x).reduce((inverter, c) => c + inverter, "")
}

var strInversa = reverterString(str)

console.log(strInversa )