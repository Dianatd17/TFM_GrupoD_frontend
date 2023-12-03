import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapalogopedasComponent } from './mapalogopedas.component';

describe('MapalogopedasComponent', () => {
  let component: MapalogopedasComponent;
  let fixture: ComponentFixture<MapalogopedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapalogopedasComponent]
    });
    fixture = TestBed.createComponent(MapalogopedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
