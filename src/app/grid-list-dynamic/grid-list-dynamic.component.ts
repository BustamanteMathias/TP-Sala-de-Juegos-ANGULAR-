import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-grid-list-dynamic",
  templateUrl: "./grid-list-dynamic.component.html",
  styleUrls: ["./grid-list-dynamic.component.css"],
})
export class GridListDynamicComponent {
  constructor(public route: Router) {}

  Ir(ruta: string) {

    console.log(ruta);

    switch (ruta) {
      case "Configuracion":
        this.route.navigate(["/Principal"]);
        break;
      case "Tateti":
        this.route.navigate(["/Juegos/TaTeTi"]);
        break;
      case "AgilidadAritmetica":
        console.log("Entre");
        this.route.navigate(["/Juegos/AgilidadAritmetica"]);
        break;
      case "AdivinaNumero":
        this.route.navigate(["/Juegos/AdivinaElNumero"]);
        break;
      case "Anagrama":
        this.route.navigate(["/Juegos/Anagrama"]);
        break;
      case "PPT":
        this.route.navigate(["/Juegos/PiedraPapelTijera"]);
        break;
      case "Memotest":
        this.route.navigate(["/Juegos/Memotest"]);
        break;
      case "MiJuego":
        this.route.navigate(["/Juegos/MiJuego"]);
        break;
    }
  }
}
