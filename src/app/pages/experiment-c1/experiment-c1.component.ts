import { Component, OnInit } from '@angular/core';
import { fakeWords, wordPairs, realWords } from 'src/app/keys';
import { Router } from '@angular/router';
import { C1RecordData } from 'src/app/models/c1Record.model';

@Component({
  selector: 'app-experiment-c1',
  templateUrl: './experiment-c1.component.html',
  styleUrls: ['./experiment-c1.component.css']
})
export class ExperimentC1Component implements OnInit {
  name: string = "";

  atWord: number = 0;
  testNum: number = 3 * 2;
  showTheButton: boolean = false;
  showTheButtonAfterSeconds: number = 3; // 10; TODO

  wordPair: string = "";
  randomWord: string = "";
  yesNoAnswer: string = "";

  realWords: string[] = realWords.map(x => x);
  fakeWords: string[] = fakeWords.map(x => x);
  wordPairs: string[] = wordPairs.map(x => x);

  c1Records: C1RecordData[] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.name = this.router.url.split('/')[2];
    this.wordPair = this.getRandomWordPair();
    this.randomWord = this.getRandomWord();

    setTimeout(() => {
      this.showTheButton = true;
    }, this.showTheButtonAfterSeconds * 1000);
  }

  //gives a random number in between 0 - max, not including max
  getRandomNumber(max: number): number {
    return  Math.floor(Math.random() * (max));
  }

  getRandomRealWord() {
    // get the word
    let randomIndex = this.getRandomNumber(this.realWords.length);
    let word = this.realWords[randomIndex];
    // remove the word so that we don't sellect again
    this.realWords.splice(randomIndex, 1);
    return word;
  }

  getRandomWord() {
    if (Math.random() > 0.5) {
      return this.getRandomRealWord();
    }
    // get the word
    let randomIndex = this.getRandomNumber(this.fakeWords.length);
    let word = this.fakeWords[randomIndex];
    // remove the word so that we don't sellect again
    this.fakeWords.splice(randomIndex, 1);
    return word;
  }

  getRandomWordPair() {
    // get the word
    let randomIndex = this.getRandomNumber(this.wordPairs.length);
    let word = this.wordPairs[randomIndex];
    // remove the word so that we don't sellect again
    this.wordPairs.splice(randomIndex, 1);
    return word;
  }

  next() {
    // only show the word
    if (this.atWord % 2 == 0) {
      // next word
      this.atWord++;
      // button timer
      this.showTheButton = false;
      setTimeout(() => {
        this.showTheButton = true;
      }, this.showTheButtonAfterSeconds * 1000);
      return;
    } 
    // the part with word, non word
    if (this.yesNoAnswer === "" || this.yesNoAnswer === null || this.yesNoAnswer === undefined) return;
    let nameWithIndex = `${this.name}-${Math.floor(this.atWord / 2)}`
    let record = new C1RecordData(nameWithIndex, this.wordPair, this.randomWord, this.yesNoAnswer);
    // TODO SAVE THE RECORD
    this.c1Records.push(record);
  

    this.atWord++;

    // if at the last word we exit
    if (this.atWord == this.testNum) {
      //TODO delete all the console.logs
      console.log(this.c1Records)

      console.log("keys real words")
      console.log(realWords)
      console.log(this.realWords)

      console.log("keys fake words")
      console.log(fakeWords)
      console.log(this.fakeWords)

      console.log("keys pair words")
      console.log(wordPairs)
      console.log(this.wordPairs)

      this.router.navigate([`done`]);
    }

    // set the new datas
    this.wordPair = this.getRandomWordPair();
    this.randomWord = this.getRandomWord();
    this.yesNoAnswer = "";

    // button timer
    this.showTheButton = false;
    setTimeout(() => {
      this.showTheButton = true;
    }, this.showTheButtonAfterSeconds * 1000);
  }
}
