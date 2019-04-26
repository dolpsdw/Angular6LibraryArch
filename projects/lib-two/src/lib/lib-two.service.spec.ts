import { TestBed } from '@angular/core/testing';

import { LibTwoService } from './lib-two.service';

describe('LibTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTwoService = TestBed.get(LibTwoService);
    expect(service).toBeTruthy();
  });
});
