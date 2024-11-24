const net = require('node:net');

function findAvailablePort (desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.listen(desiredPort, () => {
            const { port } = server.address(); // pudo escuchar 
            server.close(() => {
                resolve(port);
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {  // si está ocupado busca uno dispobible
                findAvailablePort(0).then(port => resolve(port))
            } else{
            reject(err);
            }
        })  
})}

module.exports = {findAvailablePort}