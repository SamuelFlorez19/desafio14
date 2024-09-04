import { clientes } from '../src/constants/clientes.js'
import modelos from '../models/clientes.models.js'


const getAll =  (req,res) => {
    const clientes = modelos.leerClientes()
    res.status(200).json(clientes)
}

const getOne = (req, res) => {
    const id = req.params.id
    const cliente = modelos.leerCliente(id)
    res.status(200).json(cliente)

}

const crear = (req,res) => {
    const cliente = req.body
    const clienteCreado = modelos.crearCliente(cliente)
    res.status(201).json(clientes)
}

const editar = (req,res) => {
    const id = req.params.id
    const clienteEditado = req.body
    const clienteActualizado = modelos.actualizarCliente(id, clienteEditado)
    res.status(200).json(clienteEditado);
}

const eliminar = (req,res) => {

    const id = req.params.id
    const clienteEliminado = modelos.eliminarCliente(id)
    res.status(200).send(clienteEliminado);
}


export default {getAll, getOne, crear, editar, eliminar}

