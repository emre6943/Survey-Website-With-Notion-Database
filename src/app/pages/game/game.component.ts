import { Component, OnInit } from '@angular/core';
import { RecallData } from 'src/app/models/recallData.model';
import { WordData } from 'src/app/models/wordData.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  realWords: string[] = [
    "meric",
    "kek",
    "sus",
    "amongus",
    "elo hell",
    "pog"
  ];

  fakeWords: string[] = [
    "amogus",
    "susppicious",
    "keke",
    "hammza"
  ];

  atWord: number = 0;
  testNum: number = 10;

  recallDatas: RecallData[] = [];
  wordData: WordData[] = [];

  getRandomNumber(max: number): number {
    return  Math.floor(Math.random() * (max + 1));
  }

  getRandomRealWord() {
    return this.realWords[this.getRandomNumber(this.realWords.length)]
  }

  getRandomWord() {
    if (Math.random() > 0.5) {
      return this.getRandomRealWord();
    }
    return this.fakeWords[this.getRandomNumber(this.fakeWords.length)];
  }
}
