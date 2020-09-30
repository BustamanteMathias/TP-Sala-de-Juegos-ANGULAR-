import { Component } from "@angular/core";
import { FirebaseService } from "../misServicios/firebase.service";
import { MatTableDataSource } from "@angular/material/table";
import { DbUsuarioGeneral } from "../misModelos/db-usuario-general";
const ELEMENT_DATA: any[] = [];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "app-table-basic-example",
  templateUrl: "./table-basic-example.component.html",
  styleUrls: ["./table-basic-example.component.css"],
})
export class TableBasicExampleComponent{
  displayedColumns: string[] = ["juego", "cGano", "cPerdio"];
  contador: number = 0;
  dataSource: any;
  usuario: DbUsuarioGeneral = new DbUsuarioGeneral();


  constructor(private firebase: FirebaseService) {
    this.usuario.userID = this.firebase.uID;
     this.usuario.tGano = 1213;
     this.usuario.tPerdio = 1892;

    this.firebase.GetCurrentUser().then((response) => {
      this.firebase
        .GetUsuariosDetalle()
        .snapshotChanges()
        .subscribe((item) => {
          item.forEach((element) => {
            let x = element.payload.toJSON();

            if (response.uid == x["userID"]) {

              this.firebase.Update_UsuarioGeneral(this.usuario);

              ELEMENT_DATA.push(
                {
                  juego: "Adivina el número",
                  cGano: x["Gadivina"],
                  cPerdio: x["Padivina"],
                },
                {
                  juego: "Agilidad aritmética",
                  cGano: x["Gagilidad"],
                  cPerdio: x["Pagilidad"],
                },
                {
                  juego: "Anagrama",
                  cGano: x["Ganagrama"],
                  cPerdio: x["Panagrama"],
                },
                {
                  juego: "Memotest",
                  cGano: x["Gmemotest"],
                  cPerdio: x["Pmemotest"],
                },
                {
                  juego: "Piedra, Papel o Tijeras",
                  cGano: x["Gppt"],
                  cPerdio: x["Pppt"],
                },
                {
                  juego: "Ta-Te-Ti",
                  cGano: x["Gtateti"],
                  cPerdio: x["Ptateti"],
                },
                {
                  juego: "Mi Juego",
                  cGano: x["Gmijuego"],
                  cPerdio: x["Pmijuego"],
                }
              );
            }
          });
          this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        });
    });
  }
}
