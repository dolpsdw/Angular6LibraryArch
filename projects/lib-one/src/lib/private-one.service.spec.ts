import { TestBed } from '@angular/core/testing';

import { PrivateOneService } from './private-one.service';

describe('PrivateOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateOneService = TestBed.get(PrivateOneService);
    expect(service).toBeTruthy();
  });
});
