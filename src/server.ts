import Express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRouters from './routes/index'

dotenv.config();

const server = Express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(Express.static(path.join(__dirname, '../public')))

//Rotas
server.use(mainRouters)
server.use((req,res)=>{
    res.send('Página não encontrada!')
})

server.listen(process.env.PORT)