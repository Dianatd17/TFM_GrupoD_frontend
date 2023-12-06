import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEspecialidadComponent } from './form-especialidad.component';

describe('FormEspecialidadComponent', () => {
  let component: FormEspecialidadComponent;
  let fixture: ComponentFixture<FormEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEspecialidadComponent]
    });
    fixture = TestBed.createComponent(FormEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
