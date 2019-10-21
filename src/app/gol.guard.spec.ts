import { TestBed, async, inject } from '@angular/core/testing';

import { GolGuard } from './gol.guard';

describe('GolGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolGuard]
    });
  });

  it('should ...', inject([GolGuard], (guard: GolGuard) => {
    expect(guard).toBeTruthy();
  }));
});
