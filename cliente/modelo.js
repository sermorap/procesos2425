
function Sistema(){
    this.usuarios = {}; // tipo de colección????
    //OPs sobre la colección
    this.agregarUsuario=function(nick){
        if(!this.usuario[nick]){
            this.usuario[nick]=new Usuario(nick);
        }
    }

    //Obtener la lista de usuarios
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }

    //Verificar si un usuario está activo
    this.usuarioActivo = function(nick) {
        // Devuelve true si el usuario existe, false si no
        return !!this.usuarios[nick];  //!! para convertir a booleano
    };

    //Eliminar usuarios
    this.eliminarUsuario = function(nick){
        usr=nick;
        if (this.usuarios[nick]){
            delete this.usuarios[nick];
            return "Usuario " + usr + " eliminado correctamente";
        }
        return "El usuario " + usr + " no se pudo encontrar";
    }   
}


function Usuario(nick){
    this.nick = nick;
}