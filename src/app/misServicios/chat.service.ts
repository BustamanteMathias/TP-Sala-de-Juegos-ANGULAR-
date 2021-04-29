import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../misServicios/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatMsjs: Observable<any[]>; // ESCUCHO CAMBIOS QUE DESPUES ACTUALIZO EN LISTA
  lista:any[]; //ACA TENGO LA LISTA EN TIEMPO REAL

  constructor(private angularFireDatabase : AngularFireDatabase, private firebase: FirebaseService) {
    this.chatMsjs = this.angularFireDatabase.list('chatGlobal').valueChanges();
    this.chatMsjs.subscribe(chat => {
      this.lista = chat;
    }),
    (error) => console.log(error);
  }

  GetChatDB(){
    return this.lista;
  }

  ObtenerFechaHora(){
    var  today = new Date();
    var m = today.getMonth() + 1;
    var mes = (m < 10) ? '0' + m : m;
    var h=today.getHours();
    var min=today.getMinutes();
    var s=today.getSeconds();

    var rtn: string = (today.getDate()+'-'+mes+'-'+today.getFullYear()+','+h+':'+min+':'+s).toString();
    return rtn;
  }

  PostHardcode(msj:string){
    this.firebase.GetCurrentUser().then((user:any) => {
      this.angularFireDatabase.list('chatGlobal').update(this.ObtenerFechaHora()+ ','+ user.uid, {
        user:user.email,
        hora:this.ObtenerFechaHora(),
        msj:msj
      })
    });
  }

}
