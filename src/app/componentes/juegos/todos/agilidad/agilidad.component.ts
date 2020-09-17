import { Component, EventEmitter, OnInit } from "@angular/core";
import * as $ from "jquery";

import { Subscription } from "rxjs";
import { timer } from "rxjs";

@Component({
  selector: "app-agilidad",
  templateUrl: "./agilidad.component.html",
  styleUrls: ["./agilidad.component.css"],
})
export class AgilidadComponent implements OnInit {
  private subscription: Subscription;

  operador1: any;
  operando: any;
  operador2: any;

  constructor() {
    this.juegoParado();
  }

  ngOnInit(): void {}

  usuariosGeneral;
  gano: boolean;
  usuariosAgilidad;
  usuarioLogueado;
  resultadoIngresado: number;
  numeroUno: number;
  numeroDos: number;
  operador: string;
  operadoradores: string[] = ["-", "+", ":", "x"];
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  ocultarVerificar: boolean = true;
  Tiempo: number;
  repetidor: any;

  NuevoJuego() {
    this.generarCalculo();
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);
  }

  verificar() {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);

    if (this.realizarCalculo()) {
      this.mostrarMensaje(true);
    } else {
      this.mostrarMensaje(false);
    }
  }

  generarCalculo() {
    let i = Math.floor(Math.random() * (this.operadoradores.length - 0) + 0);
    this.operador = this.operadoradores[i];
    this.numeroUno = Math.floor(Math.random() * (100 - 1) + 1);
    this.numeroDos = Math.floor(Math.random() * (100 - 1) + 1);

    this.operador1 = this.numeroUno;
    this.operador2 = this.numeroDos;
    this.operando = this.operador;
  }

  realizarCalculo(): boolean {
    let retorno = false;
    let resultado;

    switch (this.operador) {
      case ":":
        resultado = this.numeroUno % this.numeroDos;
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

      case "x":
        resultado = this.numeroUno * this.numeroDos;
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

      case "+":
        resultado = this.numeroUno + this.numeroDos;
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

      case "-":
        resultado = this.numeroUno - this.numeroDos;
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;
    }

    return retorno;
  }

  mostrarMensaje(gano: boolean) {
    if (gano) {
      this.gano = true;
      document.getElementById("mensajeAritmetica").style.background =
        "rgb(40, 216, 63)";
      $("#mensajeAritmetica").text("¡ADIVINASTE,GENIO!");
    } else {
      this.gano = false;
      document.getElementById("mensajeAritmetica").style.background =
        "rgb(204, 40, 40)";
      $("#mensajeAritmetica").text("¡ERROR!, NO SOS TAN INTELIGENTE");
    }

    this.fadeIn();
    this.cambiarResultadoBD();
    this.cambiarResultadoUsuario();
  }

  fadeIn() {
    $("#mensajeAritmetica").fadeIn();
    setTimeout(() => {
      $("#mensajeAritmetica").fadeOut();
      this.reiniciarVariables();
      this.juegoParado();
    }, 1500);
  }

  reiniciarVariables() {
    $("#numeroUno").val("");
    $("#numeroDos").val("");
    $("#operador").val("");
    this.resultadoIngresado = null;
  }

  juegoParado() {
    this.ocultarVerificar = true;
    this.Tiempo = 10;
  }

  verificarNuevoAgilidad() {
    let flag = false;

    for (let usu of this.usuariosAgilidad) {
      if (usu.usuario == this.usuarioLogueado) {
        flag = true;
        break;
      }
    }

    if (!flag) {
    }
  }

  cambiarResultadoBD() {
    let flag = false;

    for (let usu of this.usuariosAgilidad) {
      if (usu.usuario == this.usuarioLogueado) {
        this.modificarExistente(usu);
        break;
      }
    }
  }

  cambiarResultadoUsuario() {
    let flag = false;

    for (let usu of this.usuariosGeneral) {
      if (usu.nombre == this.usuarioLogueado) {
        this.modificarUsuarioPuntaje(usu);
        break;
      }
    }
  }

  modificarExistente(usuario) {
    if (this.gano == true) {
      usuario.gano++;
    } else if (this.gano == false) {
      usuario.perdio++;
    }
  }

  modificarUsuarioPuntaje(usuario) {
    if (this.gano == true) {
      usuario.gano++;
    } else {
      usuario.perdio++;
    }
  }
}
