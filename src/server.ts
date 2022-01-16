import Express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";

dotenv.config();

const server = Express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(Express.static(path.join(__dirname, '../public')))


server.listen(process.env.PORT)