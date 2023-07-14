import clientes from "../model/clientes.js";

class ClientesController{

  //listar clientes
  static listarClientes = async(req,res)=>{
    try {
      let clientesLista = await clientes.find()
      res.status(200).json(clientesLista)
    } catch (error) {
      res.status(500).json(error);
    }
  } 

  static cadastrarClientes = async(req,res)=>{
      try {
        let cliente = new clientes (req.body);
        await cliente.save()
        res.status(201).json(cliente);

      } catch (error) {
        res.status(500).json(`Erro ao cadastrar ${error}`)
      }
  }
}

export default ClientesController;