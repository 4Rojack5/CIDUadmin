import { TestBed } from '@angular/core/testing';

import { MarcadoresService } from './marcadores.service';

describe('MarcadoresService', () => {
  let service: MarcadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
