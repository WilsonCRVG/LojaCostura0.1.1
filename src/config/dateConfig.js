import moment from "moment/moment.js";



// Obter a data e hora atual
const dataAtual = moment();
console.log(dataAtual.format());

// Obter a data e hora atual em um formato específico
const dataFormat = dataAtual.format('DD/MM/YYYY HH:mm:ss');
console.log(dataFormat)

const dataFormat1 = dataAtual.format('DD/MM/YYYY');
console.log(dataformat1)



const dataEspecifica = moment('1999-08-11');
const dataEntrega = dataEspecifica.format('DD/MM/YYYY')

