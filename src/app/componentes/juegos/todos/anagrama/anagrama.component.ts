import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-anagrama",
  templateUrl: "./anagrama.component.html",
  styleUrls: ["./anagrama.component.scss"],
})
export class AnagramaComponent implements OnInit{

  palabraAdivinar:String = "LA CONCHA DE TU MADRE";
  insert:string = "";

  //LISTA DE PALABRAS

  constructor() {}

  Verificar(){
    alert(this.insert);
  }

  ngOnInit(){}
}
