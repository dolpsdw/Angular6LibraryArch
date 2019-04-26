import { TestBed } from '@angular/core/testing';

import { LibOneService } from './lib-one.service';

describe('LibOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibOneService = TestBed.get(LibOneService);
    expect(service).toBeTruthy();
  });
});
