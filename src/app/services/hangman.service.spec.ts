import { TestBed } from '@angular/core/testing';

import { HangmanService } from './hangman.service';

describe('HangmanService', () => {
  let service: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
