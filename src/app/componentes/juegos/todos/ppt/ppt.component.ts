import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../../../misServicios/firebase.service";

@Component({
  selector: "app-ppt",
  templateUrl: "./ppt.component.html",
  styleUrls: ["./ppt.component.scss"],
})
export class PptComponent implements OnInit {
  mensaje;
  intentosJugador: number = 0;
  intentosMaquina: number = 0;
  jugadaMaquina;
  jugadaJugador;
  visibleJuego: boolean;
  visibleResultado: boolean = true;
  info:string = "";

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {}

  Juego(jugada: number) {
    switch (jugada) {
      case 1:
        this.jugadaJugador = "Piedra";
        break;

      case 2:
        this.jugadaJugador = "Papel";
        break;

      case 3:
        this.jugadaJugador = "Tijera";
        break;
    }

    this.JuegoMaquina();
  }

  JuegoMaquina() {
    switch (Math.floor(Math.random() * 3 + 1)) {
      case 1:
        this.jugadaMaquina = "Piedra";
        break;

      case 2:
        this.jugadaMaquina = "Papel";
        break;

      case 3:
        this.jugadaMaquina = "Tijera";
        break;
    }

    this.mensaje = this.jugadaMaquina;

    this.Ganador();
  }

  Ganador() {
    if (this.jugadaJugador == this.jugadaMaquina) {

      this.info = "Empate!";
      setTimeout(() => {
      this.info = "";
     }, 800);

    } else {
      switch (this.jugadaJugador) {
        case "Piedra":
          if (this.jugadaMaquina == "Tijera") {
            this.info = "Ganaste!";
      setTimeout(() => {
      this.info = "";
     }, 800);
            this.intentosJugador++;
          } else {
            this.info = "Perdiste!";
      setTimeout(() => {
      this.info = "";
     }, 800);
            this.intentosMaquina++;
          }

          this.VerificarGanador();
          break;

        case "Papel":
          if (this.jugadaMaquina == "Piedra") {
            this.info = "Ganaste!";
      setTimeout(() => {
      this.info = "";
     }, 800);
            this.intentosJugador++;
          } else {
            this.info = "Perdiste!";
      setTimeout(() => {
      this.info = "";
     }, 800);
            this.intentosMaquina++;
          }
          this.VerificarGanador();
          break;

        case "Tijera":
          if (this.jugadaMaquina == "Papel") {
            this.info = "Ganaste!";
      setTimeout(() => {
      this.info = "";
     }, 800);
            this.intentosJugador++;
          } else {
            this.info = "Perdiste!";
      setTimeout(() => {
      this.info = "";
     }, 800);
            this.intentosMaquina++;
          }
          this.VerificarGanador();
          break;
      }
    }
  }

  VerificarGanador() {
    if (this.intentosJugador == 3) {
      setTimeout(() => {
        this.firebase.UsuarioGano("PPT");
        this.mensaje = "¡FELICITACIONES! GANASTE MAQUINA!";
        this.visibleJuego = true;
        this.visibleResultado = false;
      }, 600);
    } else if (this.intentosMaquina == 3) {
      setTimeout(() => {
        this.firebase.UsuarioPerdio("PPT");
        this.mensaje = "PERDISTE! PICHON";
        this.visibleJuego = true;
        this.visibleResultado = false;
      }, 600);
    }
  }

  reiniciar() {
    this.intentosJugador = 0;
    this.intentosMaquina = 0;
    this.mensaje = null;

    this.visibleJuego = false;
    this.visibleResultado = true;
    this.jugadaMaquina = null;
    this.jugadaJugador = null;
  }
}
