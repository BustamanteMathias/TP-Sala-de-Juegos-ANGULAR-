import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mijuego",
  templateUrl: "./mijuego.component.html",
  styleUrls: ["./mijuego.component.css"],
})
export class MijuegoComponent implements OnInit {

  mazo = this.GetMazo();

  //CARTAS ALEATORIAS PARA CADA UNO
  public j1: any = this.GetCartaRandom();
  public j2: any = this.GetCartaRandom();
  public j3: any = this.GetCartaRandom();
  public n1: any = this.GetCartaRandom();
  public n2: any = this.GetCartaRandom();
  public n3: any = this.GetCartaRandom();

  fondoReverso: string = "../../../../../assets/cartas/reverso.png";
  spriteN1 = this.fondoReverso;
  spriteN2 = this.fondoReverso;
  spriteN3 = this.fondoReverso;
  spriteJ1 = this.j1.sprite;
  spriteJ2 = this.j2.sprite;
  spriteJ3 = this.j3.sprite;

  //SELECT JUGADA
  fondoMesa: string = "../../../../../assets/cartas/fondoMeza.png";
  selectNPC_R1: string = this.fondoMesa;
  selectNPC_R2: string = this.fondoMesa;
  selectNPC_R3: string = this.fondoMesa;
  selectJUG_R1: string = this.fondoMesa;
  selectJUG_R2: string = this.fondoMesa;
  selectJUG_R3: string = this.fondoMesa;

  //ESTADOS
  estadoNPC_RONDA1: string = "ESPERANDO";
  estadoNPC_RONDA2: string = "ESPERANDO";
  estadoNPC_RONDA3: string = "ESPERANDO";
  estadoJUG_RONDA1: string = "ESPERANDO";
  estadoJUG_RONDA2: string = "ESPERANDO";
  estadoJUG_RONDA3: string = "ESPERANDO";

  //TURNO JUGADOR
  turnoJugador: boolean = true;

  //RONDA GENERAL
  ronda: number = 0;

  //CARTAS NPC
  cartasNPC: number[] = [1, 1, 1];

  //CARTAS JUGADOR
  cartasJUG: number[] = [1, 1, 1];

  //SLOT - NPC
  slotNPC: number[] = [1, 1, 1];

  //SLOT - JUGADOR
  slotJugador: number[] = [1, 1, 1];

  //CONTROL DE CARTAS JUGADAS
  CJ1: boolean = true;
  CJ2: boolean = true;
  CJ3: boolean = true;

  CN1: boolean = true;
  CN2: boolean = true;
  CN3: boolean = true;

  //PARTIDA
  partidaResultado: any[] = [{}, {}, {}, {}, {}, {}];
  auxCarta: any;
  JUG_GANA: number = 0;

  constructor() {}

  ngOnInit(): void {
    /*
    let turnoRandorm = Math.floor(Math.random() * 2);
    if (turnoRandorm == 0) {
      this.turnoJugador = true;
    }

    if(this.turnoJugador == false){
      this.Jugar();
    }
    */
  }

  GetMazo(){
    return [
      // ORO
      {
        tipo: "Oro",
        numero: 1,
        valor: 10,
        sprite: "../../../../../assets/cartas/oro_1.png",
      },
      {
        tipo: "Oro",
        numero: 2,
        valor: 20,
        sprite: "../../../../../assets/cartas/oro_2.png",
      },
      {
        tipo: "Oro",
        numero: 3,
        valor: 30,
        sprite: "../../../../../assets/cartas/oro_3.png",
      },
      {
        tipo: "Oro",
        numero: 4,
        valor: 2,
        sprite: "../../../../../assets/cartas/oro_4.png",
      },
      {
        tipo: "Oro",
        numero: 5,
        valor: 3,
        sprite: "../../../../../assets/cartas/oro_5.png",
      },
      {
        tipo: "Oro",
        numero: 6,
        valor: 4,
        sprite: "../../../../../assets/cartas/oro_6.png",
      },
      {
        tipo: "Oro",
        numero: 7,
        valor: 40,
        sprite: "../../../../../assets/cartas/oro_7.png",
      },
      {
        tipo: "Oro",
        numero: 10,
        valor: 6,
        sprite: "../../../../../assets/cartas/oro_10.png",
      },
      {
        tipo: "Oro",
        numero: 11,
        valor: 7,
        sprite: "../../../../../assets/cartas/oro_11.png",
      },
      {
        tipo: "Oro",
        numero: 12,
        valor: 8,
        sprite: "../../../../../assets/cartas/oro_12.png",
      },
      // COPA
      {
        tipo: "Copa",
        numero: 1,
        valor: 10,
        sprite: "../../../../../assets/cartas/copa_1.png",
      },
      {
        tipo: "Copa",
        numero: 2,
        valor: 20,
        sprite: "../../../../../assets/cartas/copa_2.png",
      },
      {
        tipo: "Copa",
        numero: 3,
        valor: 30,
        sprite: "../../../../../assets/cartas/copa_3.png",
      },
      {
        tipo: "Copa",
        numero: 4,
        valor: 2,
        sprite: "../../../../../assets/cartas/copa_4.png",
      },
      {
        tipo: "Copa",
        numero: 5,
        valor: 3,
        sprite: "../../../../../assets/cartas/copa_5.png",
      },
      {
        tipo: "Copa",
        numero: 6,
        valor: 4,
        sprite: "../../../../../assets/cartas/copa_6.png",
      },
      {
        tipo: "Copa",
        numero: 7,
        valor: 5,
        sprite: "../../../../../assets/cartas/copa_7.png",
      },
      {
        tipo: "Copa",
        numero: 10,
        valor: 6,
        sprite: "../../../../../assets/cartas/copa_10.png",
      },
      {
        tipo: "Copa",
        numero: 11,
        valor: 7,
        sprite: "../../../../../assets/cartas/copa_11.png",
      },
      {
        tipo: "Copa",
        numero: 12,
        valor: 8,
        sprite: "../../../../../assets/cartas/copa_12.png",
      },
      // BASTO
      {
        tipo: "Basto",
        numero: 1,
        valor: 60,
        sprite: "../../../../../assets/cartas/basto_1.png",
      },
      {
        tipo: "Basto",
        numero: 2,
        valor: 20,
        sprite: "../../../../../assets/cartas/basto_2.png",
      },
      {
        tipo: "Basto",
        numero: 3,
        valor: 30,
        sprite: "../../../../../assets/cartas/basto_3.png",
      },
      {
        tipo: "Basto",
        numero: 4,
        valor: 2,
        sprite: "../../../../../assets/cartas/basto_4.png",
      },
      {
        tipo: "Basto",
        numero: 5,
        valor: 3,
        sprite: "../../../../../assets/cartas/basto_5.png",
      },
      {
        tipo: "Basto",
        numero: 6,
        valor: 4,
        sprite: "../../../../../assets/cartas/basto_6.png",
      },
      {
        tipo: "Basto",
        numero: 7,
        valor: 5,
        sprite: "../../../../../assets/cartas/basto_7.png",
      },
      {
        tipo: "Basto",
        numero: 10,
        valor: 6,
        sprite: "../../../../../assets/cartas/basto_10.png",
      },
      {
        tipo: "Basto",
        numero: 11,
        valor: 7,
        sprite: "../../../../../assets/cartas/basto_11.png",
      },
      {
        tipo: "Basto",
        numero: 12,
        valor: 8,
        sprite: "../../../../../assets/cartas/basto_12.png",
      },
      // ESPADA
      {
        tipo: "Espada",
        numero: 1,
        valor: 100,
        sprite: "../../../../../assets/cartas/espada_1.png",
      },
      {
        tipo: "Espada",
        numero: 2,
        valor: 20,
        sprite: "../../../../../assets/cartas/espada_2.png",
      },
      {
        tipo: "Espada",
        numero: 3,
        valor: 30,
        sprite: "../../../../../assets/cartas/espada_3.png",
      },
      {
        tipo: "Espada",
        numero: 4,
        valor: 2,
        sprite: "../../../../../assets/cartas/espada_4.png",
      },
      {
        tipo: "Espada",
        numero: 5,
        valor: 3,
        sprite: "../../../../../assets/cartas/espada_5.png",
      },
      {
        tipo: "Espada",
        numero: 6,
        valor: 4,
        sprite: "../../../../../assets/cartas/espada_6.png",
      },
      {
        tipo: "Espada",
        numero: 7,
        valor: 50,
        sprite: "../../../../../assets/cartas/espada_7.png",
      },
      {
        tipo: "Espada",
        numero: 10,
        valor: 6,
        sprite: "../../../../../assets/cartas/espada_10.png",
      },
      {
        tipo: "Espada",
        numero: 11,
        valor: 7,
        sprite: "../../../../../assets/cartas/espada_11.png",
      },
      {
        tipo: "Espada",
        numero: 12,
        valor: 8,
        sprite: "../../../../../assets/cartas/espada_12.png",
      },
    ];
  }

  Partida(carta?) {
    this.Jugar(carta);

    if (this.ronda == 2) {
      let JUG_RONDA1 = this.partidaResultado[0].carta.valor;
      let NPC_RONDA1 = this.partidaResultado[1].carta.valor;

      if (JUG_RONDA1 > NPC_RONDA1) {
        this.JUG_GANA++;
        this.estadoJUG_RONDA1 = "GANÓ";
        this.estadoNPC_RONDA1 = "PERDIÓ";
      }else{
        this.estadoJUG_RONDA1 = "PERDIÓ";
        this.estadoNPC_RONDA1 = "GANÓ";
      }
    } else if (this.ronda == 4) {
      let JUG_RONDA2 = this.partidaResultado[2].carta.valor;
      let NPC_RONDA2 = this.partidaResultado[3].carta.valor;

      if (JUG_RONDA2 > NPC_RONDA2) {
        this.JUG_GANA++;
        this.estadoJUG_RONDA2 = "GANÓ";
        this.estadoNPC_RONDA2 = "PERDIÓ";
      }else{
        this.estadoJUG_RONDA2 = "PERDIÓ";
        this.estadoNPC_RONDA2 = "GANÓ";
      }
    } else if (this.ronda == 6) {
      let JUG_RONDA3 = this.partidaResultado[4].carta.valor;
      let NPC_RONDA3 = this.partidaResultado[5].carta.valor;

      if (JUG_RONDA3 > NPC_RONDA3) {
        this.JUG_GANA++;
        this.estadoJUG_RONDA3 = "GANÓ";
        this.estadoNPC_RONDA3 = "PERDIÓ";
      }else{
        this.estadoJUG_RONDA3 = "PERDIÓ";
        this.estadoNPC_RONDA3 = "GANÓ";
      }

      if(this.JUG_GANA > 1){
        //GANO
        console.log("GANO");
      }else{
        console.log("PERDIO");
      }
    }


  }

  Jugar(carta?) {
    if (this.turnoJugador) {
      //JUEGA JUGADOR
      switch (carta) {
        case "j1":
          if (this.CJ1) {
            this.auxCarta = this.j1;
            this.ronda++;

            if (this.slotJugador[0] == 1) {
              this.slotJugador[0] = 0;
              this.selectJUG_R1 = this.j1.sprite;
              this.spriteJ1 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            } else if (this.slotJugador[1] == 1) {
              this.slotJugador[1] = 0;
              this.selectJUG_R2 = this.j1.sprite;
              this.spriteJ1 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            } else {
              this.slotJugador[2] = 0;
              this.selectJUG_R3 = this.j1.sprite;
              this.spriteJ1 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            }

            this.CJ1 = false;
          }
          break;
        case "j2":
          if (this.CJ2) {
            this.auxCarta = this.j2;
            this.ronda++;

            if (this.slotJugador[0] == 1) {
              this.slotJugador[0] = 0;
              this.selectJUG_R1 = this.j2.sprite;
              this.spriteJ2 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            } else if (this.slotJugador[1] == 1) {
              this.slotJugador[1] = 0;
              this.selectJUG_R2 = this.j2.sprite;
              this.spriteJ2 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            } else {
              this.slotJugador[2] = 0;
              this.selectJUG_R3 = this.j2.sprite;
              this.spriteJ2 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            }

            this.CJ2 = false;
          }
          break;
        case "j3":
          if (this.CJ3) {
            this.auxCarta = this.j3;
            this.ronda++;

            if (this.slotJugador[0] == 1) {
              this.slotJugador[0] = 0;
              this.selectJUG_R1 = this.j3.sprite;
              this.spriteJ3 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            } else if (this.slotJugador[1] == 1) {
              this.slotJugador[1] = 0;
              this.selectJUG_R2 = this.j3.sprite;
              this.spriteJ3 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            } else {
              this.slotJugador[2] = 0;
              this.selectJUG_R3 = this.j3.sprite;
              this.spriteJ3 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = false;
              this.Jugar();
            }

            this.CJ3 = false;
          }
          break;
      }
    } else {
      //JUEGA MAQUINA
      let cartaElegida: boolean = false;
      let carta: number;

      do {
        let randomMaquina = Math.floor(Math.random() * 3);
        switch (randomMaquina) {
          case 0:
            if (this.cartasNPC[0] == 1) {
              this.cartasNPC[0] = 0;
              cartaElegida = true;
              carta = 1;

              this.turnoJugador = true;
            }
            break;
          case 1:
            if (this.cartasNPC[1] == 1) {
              this.cartasNPC[1] = 0;
              cartaElegida = true;
              carta = 2;

              this.turnoJugador = true;
            }
            break;
          case 2:
            if (this.cartasNPC[2] == 1) {
              this.cartasNPC[2] = 0;
              cartaElegida = true;
              carta = 3;

              this.turnoJugador = true;
            }
            break;
        }
      } while (cartaElegida == false);

      switch (carta) {
        case 1:
          if (this.CN1) {
            this.auxCarta = this.n1;
            this.ronda++;

            if (this.slotNPC[0] == 1) {
              this.slotNPC[0] = 0;
              this.selectNPC_R1 = this.n1.sprite;
              this.spriteN1 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            } else if (this.slotNPC[1] == 1) {
              this.slotNPC[1] = 0;
              this.selectNPC_R2 = this.n1.sprite;
              this.spriteN1 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            } else {
              this.slotNPC[2] = 0;
              this.selectNPC_R3 = this.n1.sprite;
              this.spriteN1 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            }

            this.CN1 = false;
          }
          break;
        case 2:
          if (this.CN2) {
            this.auxCarta = this.n2;
            this.ronda++;

            if (this.slotNPC[0] == 1) {
              this.slotNPC[0] = 0;
              this.selectNPC_R1 = this.n2.sprite;
              this.spriteN2 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            } else if (this.slotNPC[1] == 1) {
              this.slotNPC[1] = 0;
              this.selectNPC_R2 = this.n2.sprite;
              this.spriteN2 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            } else {
              this.slotNPC[2] = 0;
              this.selectNPC_R3 = this.n2.sprite;
              this.spriteN2 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            }

            this.CN2 = false;
          }
          break;
        case 3:
          if (this.CN3) {
            this.auxCarta = this.n3;
            this.ronda++;

            if (this.slotNPC[0] == 1) {
              this.slotNPC[0] = 0;
              this.selectNPC_R1 = this.n3.sprite;
              this.spriteN3 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            } else if (this.slotNPC[1] == 1) {
              this.slotNPC[1] = 0;
              this.selectNPC_R2 = this.n3.sprite;
              this.spriteN3 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            } else {
              this.slotNPC[2] = 0;
              this.selectNPC_R3 = this.n3.sprite;
              this.spriteN3 = this.fondoMesa;

              this.partidaResultado[this.ronda - 1] = {
                ronda: this.ronda,
                carta: this.auxCarta,
              };
              this.turnoJugador = true;
            }

            this.CN3 = false;
          }
          break;
      }
    }
  }

  GetCartaRandom() {
    const cartaRandom = this.mazo[Math.floor(Math.random() * 40)];
    let indexCarta = this.mazo.indexOf(cartaRandom);

    if (indexCarta !== -1) {
      this.mazo.splice(indexCarta, 1);
    }
    return cartaRandom;
  }
}
