import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientesComponent } from './admin-clientes.component';

describe('AdminClientesComponent', () => {
  let component: AdminClientesComponent;
  let fixture: ComponentFixture<AdminClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClientesComponent]
    });
    fixture = TestBed.createComponent(AdminClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
