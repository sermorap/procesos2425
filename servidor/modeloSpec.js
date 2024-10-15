const modelo = require("./modelo.js");

describe('El sistema...', function() {
    let sistema;
  
    beforeEach(function() {
      sistema=new modelo.Sistema()
    });
   8
    it('inicialmente no hay usuarios', function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
    });
  
    it('comprobamos agregar un usuario con nick', function() {
      //comprobar que no hay usuarios
      expect(sistema.numeroUsuarios()).toEqual(0);
      //agregar un usuario concreto
      expect(sistema.agregarUsuario("Sergio"));
      //comprobar que hay un usuario en el sistema
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el unico que hay es el que acabamos de agregar
      expect(sistema.usuarioActivo("Sergio")).toEqual(true);
    });
    it('comprobamos eliminar un usuario', function() {
      //comprobar que no hay usuarios
      expect(sistema.numeroUsuarios()).toEqual(0);
      //agregar un usuario concreto
      expect(sistema.agregarUsuario("Sergio"));
      //comprobar que hay un usuario en el sistema
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el unico que hay es el que acabamos de agregar
      expect(sistema.usuarioActivo("Sergio")).toEqual(true);
      //comprobar que el usuario que acabamos de agregar es el que acabamos de eliminar
      expect(sistema.usuarioActivo("Sergio")).toEqual(false);
      expect(sistema.numeroUsuarios()).toEqual(0);
    });
    it('comprobar usuario activo', function() {
      //comprobar que no hay usuarios
      expect(sistema.numeroUsuarios()).toEqual(0);
      //agregar un usuario concreto
      expect(sistema.agregarUsuario("Sergio"));
      //comprobar que hay un usuario en el sistema
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el unico que hay es el que acabamos de agregar
      expect(sistema.usuarioActivo("Sergio")).toEqual(true);
      //comprobar un usuario que no existe
      expect(sistema.usuarioActivo("Pepe")).toEqual(false);
    });
    it('comprobar el método número de usuarios', function() {
      //calcular las claves del array asociativo Object.keys(this.usuarios)
      expect(sistema.numeroUsuarios()).toEqual(0);
      //agregar un usuario concreto
      expect(sistema.agregarUsuario("Sergio"));
      //comprobar que hay un usuario en el sistema
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el unico que hay es el que acabamos de agregar
      expect(sistema.usuarioActivo("Sergio")).toEqual(true);
      //comprobar un usuario que no existe
      expect(sistema.usuarioActivo("Pepe")).toEqual(false);
      //comprobar que el numero de usuarios es 1
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el numero de usuarios es 1
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el numero de usuarios es 1
      expect(sistema.numeroUsuarios()).toEqual(1);
      //comprobar que el numero de usuarios es 1
      expect(sistema.numeroUsuarios()).toEqual
  
   })
   
  });