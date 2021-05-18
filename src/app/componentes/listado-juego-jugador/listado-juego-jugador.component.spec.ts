import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJuegoJugadorComponent } from './listado-juego-jugador.component';

describe('ListadoJuegoJugadorComponent', () => {
  let component: ListadoJuegoJugadorComponent;
  let fixture: ComponentFixture<ListadoJuegoJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoJuegoJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoJuegoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
