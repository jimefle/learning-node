const fs = require('fs')

console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf8', (err, text) =>{
    console.log('Primer texto:', text)
})

console.log('Hacer otra cosa mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf8', (err, text) =>{
    console.log('Primer texto:', text)
})

// Leyendo el primer archivo...
// Hacer otra cosa mientras lee el archivo...
// Leyendo el segundo archivo...
// Primer texto: archivo 1
// Primer texto: archivo 2