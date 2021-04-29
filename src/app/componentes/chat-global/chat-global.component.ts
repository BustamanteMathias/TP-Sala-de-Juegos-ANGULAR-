import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../misServicios/firebase.service';
import { ChatService } from '../../misServicios/chat.service';
import { Observable } from "rxjs";
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-chat-global',
  templateUrl: './chat-global.component.html',
  styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit {
  _msj:string = '';
  _userID:string;

  chatMsjs: Observable<any[]>; // ESCUCHO CAMBIOS QUE DESPUES ACTUALIZO EN LISTA
  _listaChat:any[]; //ACA TENGO LA LISTA EN TIEMPO REAL

  constructor(private chat: ChatService, private angularFireDatabase : AngularFireDatabase, private firebase: FirebaseService) {
    this.chatMsjs = this.angularFireDatabase.list('chatGlobal').valueChanges();
    this.chatMsjs.subscribe(chat => {
      this._listaChat = chat;
    }),
    (error) => console.log(error);

    this.firebase.GetCurrentUser().then((user:any) => {
      this._userID= user.email;
    });
  }

  ngOnInit(): void {
  }

  Test(){
    if(this._msj != ''){
      this.chat.PostHardcode(this._msj);
      this._msj = '';
    }else{
      console.log("Mensaje no enviado. Cadena vacia.");
    }
  }

}
