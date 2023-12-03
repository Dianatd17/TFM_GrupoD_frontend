import { TestBed } from '@angular/core/testing';

import { LogopedasService } from './mapalogopedas.service';

describe('LogopedasService', () => {
  let service: LogopedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogopedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
