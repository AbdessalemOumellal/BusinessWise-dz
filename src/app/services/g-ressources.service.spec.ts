import { TestBed, inject } from '@angular/core/testing';

import { GRessourcesService } from './g-ressources.service';

describe('GRessourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GRessourcesService]
    });
  });

  it('should be created', inject([GRessourcesService], (service: GRessourcesService) => {
    expect(service).toBeTruthy();
  }));
});
