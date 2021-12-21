import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanDisplayComponent } from './hangman-display.component';

describe('HangmanDisplayComponent', () => {
  let component: HangmanDisplayComponent;
  let fixture: ComponentFixture<HangmanDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
