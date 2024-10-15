
function Sistema(){
    this.usuarios = {}; // tipo de colección????
    //OPs sobre la colección
    this.agregarUsuario=function(nick){
        if(!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
        }
    }

    //Eliminar usuarios
    this.eliminarUsuario = function(nick){
        usr=nick;
        if (this.usuarios[nick]){
            delete this.usuarios[nick];
            return "Usuario " + usr + " eliminado correctamente";
        }
        return "El usuario " + usr + " no se pudo encontrar";
    }
    
    //Numero usuarios
    this.numeroUsuarios = function(){
        return Object.keys(this.usuarios).length;
    }

    //Obtener la lista de usuarios
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }

    //Verificar si un usuario está activo
    this.usuarioActivo = function(nick) {
        return this.usuarios[nick]!=undefined;  
    };
}

function Usuario(nick){
    this.nick = nick;
}