import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanKeyboardComponent } from './hangman-keyboard.component';

describe('HangmanKeyboardComponent', () => {
  let component: HangmanKeyboardComponent;
  let fixture: ComponentFixture<HangmanKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
