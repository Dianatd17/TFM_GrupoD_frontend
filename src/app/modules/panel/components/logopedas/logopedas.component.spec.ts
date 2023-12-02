import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopedasComponent } from './logopedas.component';

describe('LogopedasComponent', () => {
  let component: LogopedasComponent;
  let fixture: ComponentFixture<LogopedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogopedasComponent]
    });
    fixture = TestBed.createComponent(LogopedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
