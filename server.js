import express from 'express'
import clientesRouter from './routers/clientes.router.js'
const app = express()
const PORT = 8080




app.use('/api/clientes', clientesRouter)
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



app.all('*', (req, res) => {
    const { path, method } = req 
    res.status(404).send(
    {
        ok: false,
        status: 404,
        mensaje: `Ruta Invalida: ${path}`
    }
    )
})



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})