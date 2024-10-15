const fs=require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
let sistema = new modelo.Sistema();

app.get("/", function(request,response){
    let contenido=fs.readFileSync(__dirname+"/cliente/index.html");
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});

//Agregar usuario
app.get("/agregarUsuario/:nick",function(request,response){
    let nick=request.params.nick; 
    let res=sistema.agregarUsuario(nick);
    // Ojo estoy asumiendo quea agreagarUsuario(nick) es una llamada sincrona
    response.send(res);
});

// Eliminar usuario
app.get("/eliminarUsuario/:nick", function(request, response) {
    let nick = request.params.nick;
    let res = sistema.eliminarUsuario(nick);
    response.send(res);
});

// Número de usuarios
app.get("/numeroUsuarios", function(request, response) {
    let numUsuarios = sistema.numeroUsuarios();
    response.send("El número de usuarios es: " + numUsuarios);
});

// Obtener la lista de usuarios
app.get("/obtenerUsuarios", function(request, response) {
    let usuarios = sistema.obtenerUsuarios();
    response.json(usuarios);  // Usamos response.json para enviar un objeto como respuesta.
});

// Verificar si un usuario está activo
app.get("/usuarioActivo/:nick", function(request, response) {
    let nick = request.params.nick;
    let activo = sistema.usuarioActivo(nick);
    if (activo) {
        response.send("El usuario " + nick + " está activo.");
    } else {
        response.send("El usuario " + nick + " no está activo.");
    }
});

app.listen(PORT, () => {
console.log(`App está escuchando en el puerto ${PORT}`);
console.log('Ctrl+C para salir');
});