import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicExample2Component } from './table-basic-example2.component';

describe('TableBasicExample2Component', () => {
  let component: TableBasicExample2Component;
  let fixture: ComponentFixture<TableBasicExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBasicExample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
