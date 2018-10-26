import { TestBed, inject } from '@angular/core/testing';

import { GetjsonService } from './getjson.service';

describe('GetjsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetjsonService]
    });
  });

  it('should be created', inject([GetjsonService], (service: GetjsonService) => {
    expect(service).toBeTruthy();
  }));
});
