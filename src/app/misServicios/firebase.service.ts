import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { DbUsuarioDetalle } from "../misModelos/db-usuario-detalle";
import { DbUsuarioGeneral } from "../misModelos/db-usuario-general";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  listaUsuariosGeneral: AngularFireList<any>;
  listaUsuariosDetalle: AngularFireList<any>;

  listaDetalle: Observable<any[]>;
  listaGeneral: Observable<any[]>;
  listaUsuarios: any[];
  listaJuegos: any[];

  constructor(
    private AFauth: AngularFireAuth,
    private _database: AngularFireDatabase
  ) {
    this.listaDetalle = this._database.list("usuariosDetalle").valueChanges();
    this.listaDetalle.subscribe(
      (usuarios) => (this.listaUsuarios = usuarios),
      (error) => console.log(error)
    );

    this.listaGeneral = this._database.list("usuariosGeneral").valueChanges();
    this.listaGeneral.subscribe(
      (usuarios) => (this.listaJuegos = usuarios),
      (error) => console.log(error)
    );
  }

  ActualizarListas(){

  }
  // MANEJADOR BASE DE DATOS USUARIOS
  GetUsuariosDetalle() {
    return (this.listaUsuariosDetalle = this._database.list("usuariosDetalle"));
  }

  GetUsuariosGeneral() {
    return (this.listaUsuariosGeneral = this._database.list("usuariosGeneral"));
  }

  Insert_UsuarioDetalle(uDetalle: any) {
    this.GetUsuariosDetalle();

    this.listaUsuariosDetalle.set(uDetalle.userID, {
      userID: uDetalle.userID,
      userEmail: uDetalle.userEmail,
      Gtateti: 0,
      Ptateti: 0,
      Gagilidad: 0,
      Pagilidad: 0,
      Gadivina: 0,
      Padivina: 0,
      Ganagrama: 0,
      Panagrama: 0,
      Gppt: 0,
      Pppt: 0,
      Gmemotest: 0,
      Pmemotest: 0,
      Gmijuego: 0,
      Pmijuego: 0,
    });
  }

  Insert_UsuarioGeneral(uGeneral: any) {
    this.GetUsuariosGeneral();
    this.listaUsuariosGeneral.set(uGeneral.userID, {
      userID: uGeneral.userID,
      userEmail: uGeneral.userEmail,
      tGano: 0,
      tPerdio: 0,
    });
  }

  Update_UsuarioDetalle(uDetalle: any) {
    this.listaUsuariosDetalle = this.GetUsuariosDetalle();
    this.listaUsuariosDetalle.update(uDetalle.userID, {
      Gtateti: uDetalle.Gtateti,
      Ptateti: uDetalle.Ptateti,
      Gagilidad: uDetalle.Gagilidad,
      Pagilidad: uDetalle.Pagilidad,
      Gadivina: uDetalle.Gadivina,
      Padivina: uDetalle.Padivina,
      Ganagrama: uDetalle.Ganagrama,
      Panagrama: uDetalle.Panagrama,
      Gppt: uDetalle.Gppt,
      Pppt: uDetalle.Pppt,
      Gmemotest: uDetalle.Gmemotest,
      Pmemotest: uDetalle.Pmemotest,
      Gmijuego: uDetalle.Gmijuego,
      Pmijuego: uDetalle.Pmijuego,
    });
  }

  Update_UsuarioGeneral(uGeneral: any) {
    this.listaUsuariosGeneral = this.GetUsuariosGeneral();
    this.listaUsuariosGeneral.update(uGeneral.userID, {
      tGano: uGeneral.tGano,
      tPerdio: uGeneral.tPerdio,
    });
  }

  UsuarioGano(nombreJuego: string) {
    let auxDetalle = this.listaUsuarios.filter((u) => u.userID == localStorage.getItem("uID"));
    let auxGeneral = this.listaJuegos.filter((u) => u.userID == localStorage.getItem("uID"));

    auxGeneral[0].tGano = parseInt(auxGeneral[0].tGano) + 1;
    this.Update_UsuarioGeneral(auxGeneral[0]);

    switch (nombreJuego) {
      case "Adivina":
        auxDetalle[0].Gadivina = parseInt(auxDetalle[0].Gadivina) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Agilidad":
        auxDetalle[0].Gagilidad = parseInt(auxDetalle[0].Gagilidad) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Anagrama":
        auxDetalle[0].Ganagrama = parseInt(auxDetalle[0].Ganagrama) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Memotest":
        auxDetalle[0].Gmemotest = parseInt(auxDetalle[0].Gmemotest) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "PPT":
        auxDetalle[0].Gppt = parseInt(auxDetalle[0].Gppt) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Tateti":
        auxDetalle[0].Gtateti = parseInt(auxDetalle[0].Gtateti) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "MiJuego":
        auxDetalle[0].Gmijuego = parseInt(auxDetalle[0].Gmijuego) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
    }
  }

  UsuarioPerdio(nombreJuego: string) {
    let auxDetalle = this.listaUsuarios.filter((u) => u.userID == localStorage.getItem("uID"));
    let auxGeneral = this.listaJuegos.filter((u) => u.userID == localStorage.getItem("uID"));

    auxGeneral[0].tPerdio = parseInt(auxGeneral[0].tPerdio) + 1;
    this.Update_UsuarioGeneral(auxGeneral[0]);

    switch (nombreJuego) {
      case "Adivina":
        auxDetalle[0].Padivina = parseInt(auxDetalle[0].Padivina) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Agilidad":
        auxDetalle[0].Pagilidad = parseInt(auxDetalle[0].Pagilidad) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Anagrama":
        auxDetalle[0].Panagrama = parseInt(auxDetalle[0].Panagrama) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Memotest":
        auxDetalle[0].Pmemotest = parseInt(auxDetalle[0].Pmemotest) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "PPT":
        auxDetalle[0].Pppt = parseInt(auxDetalle[0].Pppt) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "Tateti":
        auxDetalle[0].Ptateti = parseInt(auxDetalle[0].Ptateti) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
      case "MiJuego":
        auxDetalle[0].Pmijuego = parseInt(auxDetalle[0].Pmijuego) + 1;
        this.Update_UsuarioDetalle(auxDetalle[0]);
        break;
    }
  }
  // FIN MANEJADOR

  Login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(
        (response) => {
          localStorage.setItem("uID", response.user.uid);
          resolve(response);
        },
        (error: any) => {
          console.log(error);
          switch (error.code) {
            case "auth/user-not-found":
              rejected("El usuario no existe");
              break;
            case "auth/invalid-email":
              rejected("Mail invalido");
              break;
            case "auth/wrong-password":
              rejected("Contraseña incorrecta");
              break;
            default:
              rejected("ERROR" + error);
              break;
          }
        }
      );
    });
  }

  Register(email: string, password: string) {
    return new Promise<any>((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(
        (response: any) => {
          localStorage.setItem("uID", response.user.uid);
          let userGeneral:DbUsuarioGeneral = new DbUsuarioGeneral();
          userGeneral.userID = response.user.uid;
          userGeneral.userEmail = email;
          let userDetalle:DbUsuarioDetalle = new DbUsuarioDetalle();
          userDetalle.userID = response.user.uid;
          userDetalle.userEmail = email;
          this.Insert_UsuarioGeneral(userGeneral);
          this.Insert_UsuarioDetalle(userDetalle);
          resolve(response);
        },
        (error: any) => {
          switch (error.code) {
            case "auth/weak-password":
              rejected("Contrasena corta, MIN 6 caracteres");
              break;
            case "auth/invalid-email":
              rejected("Mail invalido");
              break;
            case "auth/wrong-password":
              rejected("Contraseña invalida");
              break;
            case "auth/email-already-in-use":
              rejected("Correo existente");
              break;
            default:
              rejected("ERROR" + error);
              break;
          }
        }
      );
    });
  }

  GetCurrentUser() {
    return this.AFauth.currentUser;
  }

  LogOutCurrentUser() {
    this.AFauth.signOut();
  }
}
