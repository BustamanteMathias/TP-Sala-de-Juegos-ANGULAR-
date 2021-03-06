import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../misServicios/firebase.service";
@Component({
  selector: "app-anagrama",
  templateUrl: "./anagrama.component.html",
  styleUrls: ["./anagrama.component.scss"],
})
export class AnagramaComponent implements OnInit {
  usuariosGeneral;
  palabraIngresada: string = "";
  palabraAdivinar: string;
  palabras: string[] = [
    "amarillo",
    "azul",
    "verde",
    "camino",
    "negro",
    "musica",
    "arbol",
  ];
  comenzado: boolean = false;
  gano: boolean;
  usuariosAnagrama;
  usuarioLogueado;
  mensaje: string;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {}

  comenzar() {
    this.comenzado = true;
    let random = Math.floor(Math.random() * (this.palabras.length - 0) + 0);
    this.palabraAdivinar = this.palabras[random];
    this.desordenarPalabra();
  }

  desordenarPalabra() {
    let palabra = this.palabraAdivinar;
    let resultado = "";
    let zz, azar;

    for (zz = palabra.length; zz >= 1; zz--) {
      azar = Math.random() * zz + 1;
      resultado = resultado + palabra.substring(azar - 1, azar);
      palabra = palabra.substring(0, azar - 1) + palabra.substring(azar, zz);
    }

    $("#palabraAnagrama").text(resultado);
  }

  verificar() {
    if (this.palabraIngresada.toLocaleLowerCase() == this.palabraAdivinar) {
      this.firebase.UsuarioGano("Anagrama");
      this.mostrarMensaje(true, "¡ERA ESA! GENIO...");
      this.gano = true;
    } else {
      this.mostrarMensaje(false, "¡ERROR! ERA " + this.palabraAdivinar);
      this.firebase.UsuarioPerdio("Anagrama");
      this.gano = false;
    }
  }

  mostrarMensaje(gano: boolean, mensaje: string) {
    let elemento = document.getElementById("claseMensaje");

    if (gano) {
      elemento.style.background = "#10d98d";
      $("#mensajeAnagrama").text(mensaje);
    } else {
      elemento.style.background = "#dc5e69";
      $("#mensajeAnagrama").text(mensaje);
    }

    setTimeout(() => {
      this.reiniciarJuego();
    }, 2000);
  }

  reiniciarJuego() {
    $("#palabraAnagrama").text("HAGA CLICK PARA COMENZAR");
    $("#mensajeAnagrama").text("");
    this.comenzado = false;
    this.palabraAdivinar = "";
    this.palabraIngresada = "";
  }

  verificarNuevoAhorcado() {
    let flag = true;
  }

  modificarExistente(usuario?) {}

  modificarUsuarioPuntaje(usuario?) {}
}
