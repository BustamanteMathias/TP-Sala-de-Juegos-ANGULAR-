import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { FirebaseService } from "../../misServicios/firebase.service";

@Component({
  selector: 'app-listado-juego-jugador',
  templateUrl: './listado-juego-jugador.component.html',
  styleUrls: ['./listado-juego-jugador.component.css']
})
export class ListadoJuegoJugadorComponent {

  data: any[] = [];
  auxLista: any[] = [];

  cPpt:number = 0;

  constructor(private firebase: FirebaseService) {
    this.firebase.GetCurrentUser().then(() => {
      this.firebase
        .GetUsuariosDetalle()
        .snapshotChanges()
        .subscribe((item) => {
          item.forEach((element) => {
            let x = element.payload.toJSON();
            this.data.push(x);
          });
          this.ArmarLista(this.data);
        });
      });
  }

  ngOnInit(): void {
  }

  ArmarLista(lista: any[]){
    for (const iterator of lista) {
      if(iterator.Gppt > 0){
        this.auxLista.push({
          juego: "PPT",
          email: iterator.userEmail,
          gano: iterator.Gppt,
          perdio: iterator.Pppt
        });
      }

      if(iterator.Gtateti > 0){
        this.auxLista.push({
          juego: "TATETI",
          email: iterator.userEmail,
          gano: iterator.Gtateti,
          perdio: iterator.Ptateti
        });
      }

      if(iterator.Gmemotest > 0){
        this.auxLista.push({
          juego: "MEMOTEST",
          email: iterator.userEmail,
          gano: iterator.Gmemotest,
          perdio: iterator.Pmemotest
        });
      }

      if(iterator.Gmijuego > 0){
        this.auxLista.push({
          juego: "MIJUEGO",
          email: iterator.userEmail,
          gano: iterator.Gmijuego,
          perdio: iterator.Pmijuego
        });
      }
    }

    this.auxLista = this.auxLista.sort(function (a, b) {
      if (a.gano > b.gano) {
        return -1;
      }
      if (a.gano < b.gano) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

  }
}
