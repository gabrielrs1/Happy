// importar dependência
const express = require('express')
const path = require('path') // libera funcionalidade para funcionar windows
const pages = require('./pages.js')

// iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))

    // utilizando os arquivos estáticos
    .use(express.static('public')) // aqui cria todas as rotas dos arquivos

    // configurar template engine
    .set('views', path.join(__dirname,'views'))
    .set('view engine', 'hbs')

    // rotas - as rotas servem para chamar css,html,imagens etc
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(3000)