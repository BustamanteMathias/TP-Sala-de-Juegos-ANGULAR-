import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//JUEGOS
import { MenuCardComponent } from "../../componentes/menu-card/menu-card.component";
import { AdivinaElNumeroComponent } from "../../componentes/adivina-el-numero/adivina-el-numero.component";
import { AnagramaComponent } from "../../componentes/anagrama/anagrama.component";
import { PptComponent } from "../../componentes/juegos/todos/ppt/ppt.component";
import { AgilidadComponent } from "../../componentes/juegos/todos/agilidad/agilidad.component";
import { MemotestComponent } from "../../componentes/juegos/todos/memotest/memotest.component";
import { MijuegoComponent } from "../../componentes/juegos/todos/mijuego/mijuego.component";
import { TatetiComponent } from "../../componentes/juegos/todos/tateti/tateti.component";

const routes: Routes = [
  {
    path: "",
    children: 
    [
      { path: "", component: MenuCardComponent },
      { path: "AdivinaElNumero", component: AdivinaElNumeroComponent },
      { path: "Anagrama", component: AnagramaComponent },
      { path: "PiedraPapelTijera", component: PptComponent },
      { path: "AgilidadAritmetica", component: AgilidadComponent },
      { path: "Memotest", component: MemotestComponent },
      { path: "MiJuego", component: MijuegoComponent },

      { path: "TaTeTi", component: TatetiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRutasRoutingModule { }
