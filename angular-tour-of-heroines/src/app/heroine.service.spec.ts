import { TestBed } from '@angular/core/testing';

import { HeroineService } from './heroine.service';

describe('HeroineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroineService = TestBed.get(HeroineService);
    expect(service).toBeTruthy();
  });
});
