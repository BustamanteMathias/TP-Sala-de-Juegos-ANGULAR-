import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "../../misServicios/firebase.service";
//MODELOS
import { DbUsuarioDetalle } from "../../misModelos/db-usuario-detalle";
import { DbUsuarioGeneral } from "../../misModelos/db-usuario-general";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {

  email:string = "";
  pass:string = "";
  rePass:string = "";
  msjErrorLogin:string = "";
  msjErrorRegister:string = "";
  constructor(private router: Router, private firebase: FirebaseService) {}

  Ingresar(){
    this.firebase.Login(this.email, this.pass).then((response) => {
      this.router.navigate(["Principal"]);
    },
    (error: any) => {
      this.msjErrorLogin = " " + error;
    }
  );
  }

  Registrarse(){
    if(this.pass == this.rePass){
      this.firebase.Register(this.email, this.pass).then((response) => {
        this.firebase.GetCurrentUser().then((response)=>{
          //INSERT EN FIREBASE
          let uGeneral:DbUsuarioGeneral = new DbUsuarioGeneral();
          let uDetalle:DbUsuarioDetalle = new DbUsuarioDetalle();
          uGeneral.userEmail = this.email;
          uGeneral.userID = response.uid;
          uDetalle.userEmail = this.email;
          uDetalle.userID = response.uid;

          this.firebase.Insert_UsuarioDetalle(uDetalle);
          this.firebase.Insert_UsuarioGeneral(uGeneral);
          //RUTEO
          this.router.navigate(["Principal"]);
        });
      },
      (error: any) => {
        this.msjErrorRegister = " " + error;
      }
    );
    }else{
      this.msjErrorRegister = "Contraseñas no coinciden";
    }
  }
}
