import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { FirebaseService } from "../../misServicios/firebase.service";

// import { ReactiveFormsModule } from '@angular/forms'; en app.module

@Component({
  selector: "app-encuesta",
  templateUrl: "./encuesta.component.html",
  styleUrls: ["./encuesta.component.css"],
})
export class EncuestaComponent implements OnInit {
  form: FormGroup;
  msjsEstadoEnviar: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private firebase: FirebaseService
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      correo: ["", [Validators.required, Validators.email]],
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      telefono: [
        "",
        [
          Validators.required,
          Validators.min(9999999),
          Validators.max(9999999999),
        ],
      ],
      edad: ["", [Validators.required, Validators.min(18), Validators.max(99)]],
      genero: ["", [Validators.required]],
      gusto: ["", [Validators.required]],
      opinion: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  Enviar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const value = this.form.value;
      this.msjsEstadoEnviar = 1;
      this.firebase.Insert_UsuarioEncuesta(value);

      setTimeout(() => {
        this.msjsEstadoEnviar = 0;
        this.router.navigate(["/Principal"]);
      }, 2000);
    } else {
      this.msjsEstadoEnviar = 2;
      this.form.markAllAsTouched();

      setTimeout(() => {
        this.msjsEstadoEnviar = 0;
      }, 2000);
    }
  }

  Volver() {
    this.router.navigate(["Principal"]);
  }
}
