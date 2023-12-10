import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeleteClientesComponent } from './lista-delete-clientes.component';

describe('ListaDeleteClientesComponent', () => {
  let component: ListaDeleteClientesComponent;
  let fixture: ComponentFixture<ListaDeleteClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeleteClientesComponent]
    });
    fixture = TestBed.createComponent(ListaDeleteClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
