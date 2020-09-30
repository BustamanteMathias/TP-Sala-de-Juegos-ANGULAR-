import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { DbUsuarioDetalle } from "../misModelos/db-usuario-detalle";
import { DbUsuarioGeneral } from "../misModelos/db-usuario-general";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  listaUsuariosGeneral: AngularFireList<any>;
  listaUsuariosDetalle: AngularFireList<any>;
  uID: string = "";

  constructor(
    private AFauth: AngularFireAuth,
    private _database: AngularFireDatabase
  ) {
    this.listaUsuariosGeneral = this.GetUsuariosGeneral();
    this.listaUsuariosDetalle = this.GetUsuariosDetalle();
  }

  // MANEJADOR BASE DE DATOS USUARIOS
  GetUsuariosDetalle() {
    return (this.listaUsuariosDetalle = this._database.list("usuariosDetalle"));
  }

  GetUsuariosGeneral() {
    return (this.listaUsuariosGeneral = this._database.list("usuariosGeneral"));
  }

  Insert_UsuarioDetalle(uDetalle: DbUsuarioDetalle) {
    this.GetUsuariosDetalle();

    this.listaUsuariosDetalle.push({
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

  Insert_UsuarioGeneral(uGeneral: DbUsuarioGeneral) {
    this.GetUsuariosGeneral();

    this.listaUsuariosGeneral.push({
      userID: uGeneral.userID,
      userEmail: uGeneral.userEmail,
      tGano: 0,
      tPerdio: 0,
    });
  }

  Update_UsuarioDetalle(uDetalle: DbUsuarioDetalle) {
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

  Update_UsuarioGeneral(uGeneral: DbUsuarioGeneral) {
    this.listaUsuariosGeneral = this.GetUsuariosGeneral();
    this.listaUsuariosGeneral.update(uGeneral.userID, {
      tGano: uGeneral.tGano,
      tPerdio: uGeneral.tPerdio,
    });
  }

  // FIN MANEJADOR

  Login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(
        (response) => {
          this.uID = response.user.uid;
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
              rejected("ERROR");
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
          this.uID = response.user.uid;
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
              rejected("ERROR");
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
