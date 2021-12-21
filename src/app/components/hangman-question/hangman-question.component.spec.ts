import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanQuestionComponent } from './hangman-question.component';

describe('HangmanQuestionComponent', () => {
  let component: HangmanQuestionComponent;
  let fixture: ComponentFixture<HangmanQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
