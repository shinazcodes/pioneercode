import { TestBed, inject } from '@angular/core/testing';

import { OnlineCompilerService } from './online-compiler.service';

describe('OnlineCompilerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlineCompilerService]
    });
  });

  it('should be created', inject([OnlineCompilerService], (service: OnlineCompilerService) => {
    expect(service).toBeTruthy();
  }));
});
