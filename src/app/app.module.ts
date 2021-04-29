import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AdivinaElNumeroComponent } from "./componentes/adivina-el-numero/adivina-el-numero.component";
import { ListadoDeResultadosComponent } from "./componentes/listado-de-resultados/listado-de-resultados.component";
import { LoginComponent } from "./componentes/login/login.component";
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";

// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from "@angular/router";

import { MiHttpService } from "./servicios/mi-http/mi-http.service";
import { PaisesService } from "./servicios/paises.service";

import { JugadoresService } from "./servicios/jugadores.service";
import { ArchivosJugadoresService } from "./servicios/archivos-jugadores.service";
import { ErrorComponent } from "./componentes/error/error.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { AgilidadAritmeticaComponent } from "./componentes/agilidad-aritmetica/agilidad-aritmetica.component";
import { MenuComponent } from "./componentes/menu/menu.component";
import { AdivinaMasListadoComponent } from "./componentes/adivina-mas-listado/adivina-mas-listado.component";
import { AgilidadMasListadoComponent } from "./componentes/agilidad-mas-listado/agilidad-mas-listado.component";
import { RuteandoModule } from "./ruteando/ruteando.module";
import { ListadoComponent } from "./componentes/listado/listado.component";
import { JugadoresListadoComponent } from "./componentes/jugadores-listado/jugadores-listado.component";

import { JuegoServiceService } from "./servicios/juego-service.service";
import { ListadosComponent } from "./componentes/listados/listados.component";
import { JuegosComponent } from "./componentes/juegos/juegos.component";
import { RegistroComponent } from "./componentes/registro/registro.component";
import { MenuCardComponent } from "./componentes/menu-card/menu-card.component";
import { CabeceraComponent } from "./componentes/cabecera/cabecera.component";
import { QuienSoyComponent } from "./componentes/quien-soy/quien-soy.component";
import { AnagramaComponent } from "./componentes/anagrama/anagrama.component";
import { ListadoDePaisesComponent } from "./componentes/listado-de-paises/listado-de-paises.component";
import { MapaDeGoogleComponent } from "./componentes/mapa-de-google/mapa-de-google.component";
import { AgmCoreModule } from "@agm/core";
import { InputJugadoresComponent } from "./componentes/input-jugadores/input-jugadores.component";
import { SexoPipe } from "./pipes/sexo.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChatGlobalComponent } from './componentes/chat-global/chat-global.component';

//ANGULAR MATERIAL
import { MaterialModule } from "./material.module";
import { GridListDynamicComponent } from "./grid-list-dynamic/grid-list-dynamic.component";
import { TableBasicExampleComponent } from "./table-basic-example/table-basic-example.component";
import { TableBasicExample2Component } from "./table-basic-example2/table-basic-example2.component";
import { TatetiComponent } from "./src/app/componentes/juegos/tateti/tateti.component";
import { AgilidadComponent } from "./componentes/juegos/todos/agilidad/agilidad.component";
import { PptComponent } from "./componentes/juegos/todos/ppt/ppt.component";
import { MemotestComponent } from "./componentes/juegos/todos/memotest/memotest.component";
import { MijuegoComponent } from "./componentes/juegos/todos/mijuego/mijuego.component";

//FIREBASE
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FirebaseService } from "./misServicios/firebase.service";

import { ChatService } from "./misServicios/chat.service";

const firebaseConfig = {
  apiKey: "AIzaSyBPV6uke49xKWuIdOzxfbIkutaKCQPynI4",
  authDomain: "mabustamante-saladejuegos.firebaseapp.com",
  databaseURL: "https://mabustamante-saladejuegos.firebaseio.com",
  projectId: "mabustamante-saladejuegos",
  storageBucket: "mabustamante-saladejuegos.appspot.com",
  messagingSenderId: "68968852962",
  appId: "1:68968852962:web:86599d989778f8169d9dbb",
};

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    GridListDynamicComponent,
    TableBasicExampleComponent,
    TableBasicExample2Component,
    TatetiComponent,
    AgilidadComponent,
    PptComponent,
    MemotestComponent,
    MijuegoComponent,
    ChatGlobalComponent,
  ],
  imports: [
    BrowserModule,
    RuteandoModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys",
    }),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [
    JuegoServiceService,
    MiHttpService,
    PaisesService,
    ArchivosJugadoresService,
    JugadoresService,
    FirebaseService,
    ChatService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
