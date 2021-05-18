import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../componentes/login/login.component";
import { ErrorComponent } from "../componentes/error/error.component";
import { PrincipalComponent } from "../componentes/principal/principal.component";
import { ListadoComponent } from "../componentes/listado/listado.component";
import { RegistroComponent } from "../componentes/registro/registro.component";
import { QuienSoyComponent } from "../componentes/quien-soy/quien-soy.component";
import { JugadoresListadoComponent } from "../componentes/jugadores-listado/jugadores-listado.component";
import { ChatGlobalComponent } from "../componentes/chat-global/chat-global.component";
import { EncuestaComponent } from "../componentes/encuesta/encuesta.component";
/**
 *JUEGO
import { MenuCardComponent } from "../componentes/menu-card/menu-card.component";
import { JuegosComponent } from "../componentes/juegos/juegos.component";
import { AdivinaElNumeroComponent } from "../componentes/adivina-el-numero/adivina-el-numero.component";
import { AnagramaComponent } from "../componentes/anagrama/anagrama.component";
import { PptComponent } from "../componentes/juegos/todos/ppt/ppt.component";
import { AgilidadComponent } from "../componentes/juegos/todos/agilidad/agilidad.component";
import { TatetiComponent } from "../componentes/juegos/todos/tateti/tateti.component";
import { MemotestComponent } from "../componentes/juegos/todos/memotest/memotest.component";
import { MijuegoComponent } from "../componentes/juegos/todos/mijuego/mijuego.component";
*/

//RUTAS
const MiRuteo = [
  { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "Jugadores", component: JugadoresListadoComponent },
  { path: "Login", component: LoginComponent },
  { path: "QuienSoy", component: QuienSoyComponent },
  { path: "Registro", component: RegistroComponent },
  { path: "Principal", component: PrincipalComponent },
  { path: "Listado", component: ListadoComponent },
  { path: "Chat", component: ChatGlobalComponent },
  { path: "Encuesta", component: EncuestaComponent },
  {
    path: "Juegos",
    loadChildren: ()=> import('../modelos/sub-rutas/sub-rutas.module').then(m => m.SubRutasModule)
    },
  /*{
    path: "Juegos",
    component: JuegosComponent,
    children: [
      { path: "", component: MenuCardComponent },
      { path: "AdivinaElNumero", component: AdivinaElNumeroComponent },
      { path: "Anagrama", component: AnagramaComponent },
      { path: "PiedraPapelTijera", component: PptComponent },
      { path: "AgilidadAritmetica", component: AgilidadComponent },
      { path: "TaTeTi", component: TatetiComponent },
      { path: "Memotest", component: MemotestComponent },
      { path: "MiJuego", component: MijuegoComponent },
    ],
  },*/
  { path: "**", component: ErrorComponent },
  { path: "error", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(MiRuteo)],
  exports: [RouterModule],
})
export class RuteandoModule {}
