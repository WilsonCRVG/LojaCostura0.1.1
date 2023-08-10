import servicos from "../model/servicos.js";

class ServicosController{

  //listar Servicos
  static listarServicos = async(req,res)=>{
    try {
      let servicosLista = await servicos.find()
      .populate('cliente')

      res.status(200).json(servicosLista)
    } catch (error) {
      res.status(500).json(error);
    }
  } 
//Cadastrar Servicos
  static cadastrarServicos = async(req,res)=>{
      try {
        let servico = new servicos(req.body);
        await servico.save()
        res.status(201).json(servico);
        console.log("Cadastrado")

      } catch (error) {
        res.status(500).json(`Erro ao cadastrar ${error}`)
      }
  }


//Update Servicos
  static atualizarAutores = async(req,res)=>{
    try {
      let id = req.params.id;

      await clientes.findByIdAndUpdate(id,{$set: req.body});
      res.status(200).json({message:"Cliente atualizado com sucesso"})
    } catch (error) {
      res.status(500).send({message:error.message})
    }
  }


//Deletar Servicos
  static deletarCliente = async (req,res)=>{

    try {
      let id = req.params.id;

      let cliente = await clientes.findByIdAndDelete(id)

      if (!cliente) {
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