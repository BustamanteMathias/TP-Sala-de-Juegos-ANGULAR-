import { ElementRef, Renderer2 } from "@angular/core";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../../misServicios/api.service";
import { FirebaseService } from "../../../../misServicios/firebase.service";

@Component({
  selector: "app-memotest",
  templateUrl: "./memotest.component.html",
  styleUrls: ["./memotest.component.css"],
})
export class MemotestComponent implements OnInit {
  comenzar: boolean = false;
  cuadrados = ["0", "0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5"];
  mensaje: string;
  mostrarMensaje: boolean = false;
  mostrar: boolean[] = new Array(12);
  tarjetaA = null;
  tarjetaB = null;
  indexA: number;
  indexB: number;
  intentos: number;

  api_imagenes: any = [];
  @ViewChild("casilla_0") casilla0: ElementRef;
  @ViewChild("casilla_1") casilla1: ElementRef;
  @ViewChild("casilla_2") casilla2: ElementRef;
  @ViewChild("casilla_3") casilla3: ElementRef;
  @ViewChild("casilla_4") casilla4: ElementRef;
  @ViewChild("casilla_5") casilla5: ElementRef;
  @ViewChild("casilla_6") casilla6: ElementRef;
  @ViewChild("casilla_7") casilla7: ElementRef;
  @ViewChild("casilla_8") casilla8: ElementRef;
  @ViewChild("casilla_9") casilla9: ElementRef;
  @ViewChild("casilla_10") casilla10: ElementRef;
  @ViewChild("casilla_11") casilla11: ElementRef;

  constructor(
    private firebase: FirebaseService,
    private api: ApiService,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    this.api_imagenes = this.api.Get();
    this.api_imagenes.subscribe((data) => {
      this.api_imagenes = data;
      console.log(this.api_imagenes);
    });
  }

  comenzarJuego() {
    this.comenzar = true;
    //this.inicializarMostrar();
    this.cuadrados.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    this.intentos = 15;
    this.ocultar();
  }

  inicializarMostrar() {
    for (let i = 0; i < 12; i++) {
      this.mostrar[i] = true;
    }
  }

  jugar(casillero: number) {
    if (!this.mostrar[casillero]) {
      this.mostrar[casillero] = true;
      this.checkMemotest();

      setTimeout(() => {

        if (this.tarjetaA == null) {
          this.tarjetaA = this.cuadrados[casillero];
          this.indexA = casillero;
        } else {
          this.tarjetaB = this.cuadrados[casillero];
          this.indexB = casillero;
          if (this.tarjetaA == this.tarjetaB) {
            this.verficiarGanador();
          } else {
            this.intentos--;
            if (this.intentos < 0) {
              this.jugadorPerdio();
            } else {
              this.mostrar[this.indexA] = false;
              this.mostrar[this.indexB] = false;

              switch (this.indexA) {
                case 0:
                  this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "none");
                  break;
                case 1:
                  this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "none");
                  break;
                case 2:
                  this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "none");
                  break;
                case 3:
                  this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "none");
                  break;
                case 4:
                  this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "none");
                  break;
                case 5:
                  this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "none");
                  break;
                case 6:
                  this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "none");
                  break;
                case 7:
                  this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "none");
                  break;
                case 8:
                  this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "none");
                  break;
                case 9:
                  this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "none");
                  break;
                case 10:
                  this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "none");
                  break;
                case 11:
                  this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "none");
                  break;
              }

              switch (this.indexB) {
                case 0:
                  this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "none");
                  break;
                case 1:
                  this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "none");
                  break;
                case 2:
                  this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "none");
                  break;
                case 3:
                  this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "none");
                  break;
                case 4:
                  this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "none");
                  break;
                case 5:
                  this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "none");
                  break;
                case 6:
                  this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "none");
                  break;
                case 7:
                  this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "none");
                  break;
                case 8:
                  this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "none");
                  break;
                case 9:
                  this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "none");
                  break;
                case 10:
                  this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "none");
                  break;
                case 11:
                  this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "none");
                  break;
              }
            }
          }
          this.tarjetaA = null;
          this.tarjetaB = null;
        }
      }, 500);
    }
  }

  checkMemotest() {

    if (this.mostrar[0]) {
      switch (this.cuadrados[0]) {
        case "0":
          this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla0.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[1]) {
      switch (this.cuadrados[1]) {
        case "0":
          this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla1.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[2]) {
      switch (this.cuadrados[2]) {
        case "0":
          this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla2.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[3]) {
      switch (this.cuadrados[3]) {
        case "0":
          this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla3.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[4]) {
      switch (this.cuadrados[4]) {
        case "0":
          this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla4.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[5]) {
      switch (this.cuadrados[5]) {
        case "0":
          this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla5.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[6]) {
      switch (this.cuadrados[6]) {
        case "0":
          this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla6.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[7]) {
      switch (this.cuadrados[7]) {
        case "0":
          this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla7.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[8]) {
      switch (this.cuadrados[8]) {
        case "0":
          this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla8.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[9]) {
      switch (this.cuadrados[9]) {
        case "0":
          this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla9.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[10]) {
      switch (this.cuadrados[10]) {
        case "0":
          this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla10.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }
    if (this.mostrar[11]) {
      switch (this.cuadrados[11]) {
        case "0":
          this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][0] + ")");
          break;
        case "1":
          this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][1] + ")");
          break;
        case "2":
          this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][2] + ")");
          break;
        case "3":
          this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][3] + ")");
          break;
        case "4":
          this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][4] + ")");
          break;
        case "5":
          this.renderer2.setStyle(this.casilla11.nativeElement, 'background-image', "url(" + this.api_imagenes['message'][5] + ")");
          break;
      }
    }


  }

  ocultar() {
    for (let i = 0; i < 12; i++) {
      this.mostrar[i] = false;
    }
  }

  verficiarGanador() {
    let contador: number = 0;
    for (let i = 0; i < 12; i++) {
      if (this.mostrar[i]) {
        contador++;
      }
    }
    if (contador == 12) {
      this.jugadorGano();
    }
  }

  jugadorGano() {
    this.firebase.UsuarioGano("Memotest");
    this.mostrarMensaje = true;
    this.mensaje = "GANASTE!";
    setTimeout(() => this.reiniciar(), 4000);
  }

  jugadorPerdio() {
    this.firebase.UsuarioPerdio("Memotest");
    this.mostrarMensaje = true;
    this.mensaje = "PERDISTE";
    setTimeout(() => this.reiniciar(), 4000);
  }

  reiniciar() {
    this.mostrarMensaje = false;
    this.comenzar = false;
    this.inicializarMostrar();
  }
}
