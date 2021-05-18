import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {

  verEncuesta:boolean = false;

 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor() {  }

  ngOnInit() {
  }

  Encuesta(){
    this.verEncuesta = !this.verEncuesta;
  }
}

