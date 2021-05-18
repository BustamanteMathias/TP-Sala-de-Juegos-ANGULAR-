import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FirebaseService } from "../misServicios/firebase.service";
import { DbUsuarioGeneral } from "../misModelos/db-usuario-general";
import { Router } from "@angular/router";


@Component({
  selector: "app-table-basic-example2",
  templateUrl: "./table-basic-example2.component.html",
  styleUrls: ["./table-basic-example2.component.css"],
})
export class TableBasicExample2Component implements OnInit {
  contador: number = 1;
  displayedColumns: string[] = ["num", "cuenta", "tGanadas", "tPerdidas"];
  dataSource: any;
  listaUsuarios: any[];

  ELEMENT_DATA: any[] = [{}];

  constructor(private firebase: FirebaseService, private router: Router) {
    this.firebase
      .GetUsuariosGeneral()
      .snapshotChanges()
      .subscribe((item) => {
        this.listaUsuarios = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          console.log(x);
          this.ELEMENT_DATA.push({
            num: (this.contador++).toString(),
            cuenta: x["userEmail"],
            tGanadas: x["tGano"],
            tPerdidas: x["tPerdio"],
          });
        });
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      });
  }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
