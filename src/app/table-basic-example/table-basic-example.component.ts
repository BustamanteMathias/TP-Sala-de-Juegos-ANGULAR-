import {Component} from '@angular/core';

export interface PeriodicElement {
  pos: number;
  juego: string;
  puntos: number;
  cuenta: string;
}

const ELEMENT_DATA: PeriodicElement[] =
[
  {pos: 1,   juego: 'Juego Test',  puntos: 1,   cuenta: 'correo@test.com'},
  {pos: 2,   juego: 'Juego Test',  puntos: 4,   cuenta: 'correo@test.com'},
  {pos: 3,   juego: 'Juego Test',  puntos: 6,   cuenta: 'correo@test.com'},
  {pos: 4,   juego: 'Juego Test',  puntos: 9,   cuenta: 'correo@test.com'},
  {pos: 5,   juego: 'Juego Test',  puntos: 10,  cuenta: 'correo@test.com'},
  {pos: 6,   juego: 'Juego Test',  puntos: 12,  cuenta: 'correo@test.com'},
  {pos: 7,   juego: 'Juego Test',  puntos: 14,  cuenta: 'correo@test.com'},
  {pos: 8,   juego: 'Juego Test',  puntos: 15,  cuenta: 'correo@test.com'},
  {pos: 9,   juego: 'Juego Test',  puntos: 18,  cuenta: 'correo@test.com'},
  {pos: 10,  juego: 'Juego Test',  puntos: 20,  cuenta: 'correo@test.com'},
  {pos: 11,  juego: 'Juego Test',  puntos: 18,  cuenta: 'correo@test.com'},
  {pos: 12,  juego: 'Juego Test',  puntos: 18,  cuenta: 'correo@test.com'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.css']
})
export class TableBasicExampleComponent {
  displayedColumns: string[] = ['pos', 'juego', 'puntos', 'cuenta'];
  dataSource = ELEMENT_DATA;
}
