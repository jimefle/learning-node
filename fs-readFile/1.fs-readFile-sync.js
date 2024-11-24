const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
const text1 = fs.readFileSync('./archivo.txt', 'utf8');
console.log('Primer texto:', text1)

console.log('Hacer otra cosa mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
const text2 = fs.readFileSync('./archivo2.txt', 'utf8');
console.log('Segundo texto:', text2)

//Leyendo el primer archivo...
// Primer texto: archivo 1
// Hacer otra cosa mientras lee el archivo...
// Leyendo el segundo archivo...
// Segundo texto: archivo 2