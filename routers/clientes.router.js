import controlador from '../controllers/clientes.controller.js'
import express from 'express'
const clientesRouter = express.Router()

//GET ALL
clientesRouter.get('/', controlador.getAll)

// GET ONE
clientesRouter.get('/:id', controlador.getOne)

//CREAR CLIENTE
clientesRouter.post('/',  controlador.crear)


//EDITAR CLIENTE
clientesRouter.put('/:id', controlador.editar)

//ELIMINAR CLIENTE
clientesRouter.delete('/:id', controlador.eliminar)


export default clientesRouter