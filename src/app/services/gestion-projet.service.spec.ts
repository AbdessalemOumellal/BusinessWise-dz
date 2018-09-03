import { TestBed, inject } from '@angular/core/testing';

import { GestionProjetService } from './gestion-projet.service';

describe('GestionProjetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionProjetService]
    });
  });

  it('should be created', inject([GestionProjetService], (service: GestionProjetService) => {
    expect(service).toBeTruthy();
  }));
});
