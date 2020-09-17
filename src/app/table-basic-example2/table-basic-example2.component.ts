import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  num: number;
  cuenta: string;
}

const ELEMENT_DATA: PeriodicElement[] =
[
  {num: 1,   cuenta: 'correo@test.com'},
  {num: 2,   cuenta: 'correo@test.com'},
  {num: 3,   cuenta: 'correo@test.com'},
  {num: 4,   cuenta: 'correo@test.com'},
  {num: 5,   cuenta: 'correo@test.com'},
  {num: 6,   cuenta: 'correo@test.com'},
  {num: 7,   cuenta: 'correo@test.com'},
  {num: 8,   cuenta: 'correo@test.com'},
  {num: 9,   cuenta: 'correo@test.com'},
  {num: 10,  cuenta: 'correo@test.com'},
  {num: 11,  cuenta: 'correo@test.com'},
  {num: 12,  cuenta: 'correo@test.com'}
];

@Component({
  selector: 'app-table-basic-example2',
  templateUrl: './table-basic-example2.component.html',
  styleUrls: ['./table-basic-example2.component.css']
})

export class TableBasicExample2Component{

  constructor() { }

  displayedColumns: string[] = ['num', 'cuenta'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

