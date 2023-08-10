import clientes from "../model/clientes.js";

class ClientesController{

  //listar Clientes
  static listarClientes = async(req,res)=>{
    try {
      let clientesLista = await clientes.find()
      res.status(200).json(clientesLista)
    } catch (error) {
      res.status(500).json(error);
    }
  } 
//Cadastro Clientes
  static cadastrarClientes = async(req,res)=>{
      try {
        let cliente = new clientes (req.body);
        await cliente.save()
        res.status(201).json(cliente);

      } catch (error) {
        res.status(500).json(`Erro ao cadastrar ${error}`)
      }
  }
//Update Clientes
  static atualizarAutores = async(req,res)=>{
    try {
      let id = req.params.id;

      await clientes.findByIdAndUpdate(id,{$set: req.body});
      res.status(200).json({message:"Cliente atualizado com sucesso"})
    } catch (error) {
      res.status(500).send({message:error.message})
    }
  }
//Deletar Clientes
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

export default ClientesController;