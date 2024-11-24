const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000 // default port

// PORT=1234 node http.js variable de entorno

const server = http.createServer((req, res) => {
    console.log('request received')    
    res.end('Hello world')
})

// para que use un puerto vacio
findAvailablePort(desiredPort).then( port => {  //intenta con 3000 y si está ocupado va por otro
    server.listen(port, () =>  {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})