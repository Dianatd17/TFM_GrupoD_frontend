import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogopedasComponent } from './admin-logopedas.component';

describe('AdminLogopedasComponent', () => {
  let component: AdminLogopedasComponent;
  let fixture: ComponentFixture<AdminLogopedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLogopedasComponent]
    });
    fixture = TestBed.createComponent(AdminLogopedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
