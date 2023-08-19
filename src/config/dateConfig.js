import moment from "moment/moment.js";

        // Obter a data e hora atual
        const dataAtual = moment();
        //console.log(dataAtual.format());

export class DataFormatada{
    

    //DATA ATUAL
   static dataAtual = ()=>{
        return  dataAtual.format()
    }

    //DATA E HORA NO FORMATO ESPECIFICO
   static dataHoraformat = ()=>{
    
        // Obter a data e hora atual em um formato específico
        const dataFormat = dataAtual.format('DD/MM/YYYY HH:mm:ss');
        return dataFormat

}



static dataAtualFormat = ()=>{
    
    const dataFormat1 = dataAtual.format('DD/MM/YYYY');
    console.log(dataFormat1)

}

static dataMomentoEspecifico = ()=>{
    
    const dataEspecifica = moment('1999-08-11');
  //  const dataEntrega = dataEspecifica.format('DD/MM/YYYY')
   
    }
};