import { clientes } from "../src/constants/clientes.js"


let objId = clientes.length

const leerClientes = () => {
    return clientes
    
}

const leerCliente = (id) => {
    const cliente = clientes.find(cliente => cliente.id == id) || {}
    return cliente
}

const crearCliente = (cliente) => {
    cliente.id = ++objId
    clientes.push(cliente)
    return crearCliente
}

const actualizarCliente = (id, clienteEditado) => {
    clienteEditado.id = id
    let index = clientes.findIndex(client => client.id == id)
    clientes.splice(index, 1, clienteEditado)
    return actualizarCliente
}

const eliminarCliente = (id) => {
    let index = clientes.findIndex(client => client.id == id)
    let cliente = clientes.splice(index, 1)[0]
    return eliminarCliente
}

export default {
    leerClientes,
    leerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}