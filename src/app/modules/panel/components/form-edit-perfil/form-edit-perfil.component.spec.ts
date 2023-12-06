import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPerfilComponent } from './form-edit-perfil.component';

describe('FormEditPerfilComponent', () => {
  let component: FormEditPerfilComponent;
  let fixture: ComponentFixture<FormEditPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditPerfilComponent]
    });
    fixture = TestBed.createComponent(FormEditPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
