import servicos from "../model/servicos.js";

class ServicosController{

  //listar Servicos
  static listarServicos = async(req,res)=>{
    try {
      let servicosLista = await servicos.find()
      

      res.status(200).json(servicosLista)
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Listar por ID
  static listarPorId = async (req,res)=>{
    try {
      
      let id = req.params.id

      const servico = await servicos.findById(id).populate('cliente','nome')

      res.status(200).send(servico)

    } catch (erro) {
      res.status(400).send({message:`${erro} - Id Não Encontrado `})
    }


  };

    //Listar Por data Especifica
    static listarPorDataEntrega = async (req,res)=>{
      try {
        const dataAtual = new Date(req.params.dataEntrega)

        const servicosDatas = await servicos.find({
          dataEntrega: dataAtual,
        })
        .populate('cliente','nome')
        
        res.status(200).send(servicosDatas)
            
      } catch (error) {
        res.status(500).json({ message: error + 'Ocorreu um erro ao listar registros.' });
      }
    };



//Cadastrar Servicos
  static cadastrarServicos = async(req,res)=>{
      try {

        let datacreate = {
          cliente:req.body.cliente,
          tipo: req.body.tipo,
          valor: req.body.valor,
          dataEntrega: new Date(req.body.dataEntrega)
        }

        let servico = new servicos(datacreate);
        await servico.save()
        res.status(201).json(servico);
        console.log("Cadastrado")

      } catch (error) {
        res.status(500).json(`Erro ao cadastrar ${error}`)
      }
}


//Update Servicos
  static atualizaServicos = async(req,res)=>{
    try {
      let id = req.params.id;

      await servicos.findByIdAndUpdate(id,{$set: req.body});
      res.status(200).json({message:"Serviço atualizado com sucesso"})
    } catch (error) {
      res.status(500).send({message:error.message})
    }
  }


//Deletar Servicos
  static deletarServico = async (req,res)=>{

    try {
      let id = req.params.id;

      let servico = await servicos.findByIdAndDelete(id)

      if (!servico) {
        res.status(404).send({message:"ID do cliente não localizado ."})
        
      } else {
        res.status(200).send({message:"Cliente Excluído com Sucesso"})
      }

    } catch (error) {
      res.status(400).send({message:`${error.message} - Erro ao Excluir o Cliente . `})
    }
  }

}

export default ServicosController;