import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hangman-question',
  templateUrl: './hangman-question.component.html',
  styleUrls: ['./hangman-question.component.scss'],
})
export class HangmanQuestionComponent implements OnInit, OnChanges {
  @Input() question: string = '';
  @Input() guesses: string[] = [];
  characters: { value: string; guessed: boolean }[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['question']?.currentValue &&
      changes?.['question'].currentValue !== changes?.['question'].previousValue
    ) {
      this.characters = this.question
        .split('')
        .map((char) => ({ value: char, guessed: false }));
    }
    const guessesCurrentValue = changes?.['guesses']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['guesses'].previousValue
    ) {
      const guessedChar = [...changes['guesses'].currentValue].pop();
      this.characters = this.characters.map((char) => {
        if (char.value.toLowerCase() === guessedChar.toLowerCase()) {
          return { ...char, guessed: true };
        }
        return char;
      });
    }
  }
}
