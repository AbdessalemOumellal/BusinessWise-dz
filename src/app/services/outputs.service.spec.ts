import { TestBed, inject } from '@angular/core/testing';

import { OutputsService } from './outputs.service';

describe('OutputsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutputsService]
    });
  });

  it('should be created', inject([OutputsService], (service: OutputsService) => {
    expect(service).toBeTruthy();
  }));
});
