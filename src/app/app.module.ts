import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HangmanDisplayComponent } from './components/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from './components/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from './components/hangman-question/hangman-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
