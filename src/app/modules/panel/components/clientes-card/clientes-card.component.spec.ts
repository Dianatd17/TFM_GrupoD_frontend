import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCardComponent } from './clientes-card.component';

describe('ClientesCardComponent', () => {
  let component: ClientesCardComponent;
  let fixture: ComponentFixture<ClientesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesCardComponent]
    });
    fixture = TestBed.createComponent(ClientesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
