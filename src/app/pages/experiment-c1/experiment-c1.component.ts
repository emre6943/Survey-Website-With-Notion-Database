import { Component, Inject, OnInit } from '@angular/core';
import { fakeWords, wordPairs, realWords } from 'src/app/keys';
import { Router } from '@angular/router';
import { C1RecordData } from 'src/app/models/c1Record.model';
import { DOCUMENT } from '@angular/common';
import { NotionApiService } from 'src/app/notion-api.service';
import { Console } from 'console';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-experiment-c1',
  templateUrl: './experiment-c1.component.html',
  styleUrls: ['./experiment-c1.component.css']
})
export class ExperimentC1Component implements OnInit {
  name: string = "";

  atWord: number = 0;
  testNum: number = 4 * 2; // 10 * 2?
  showTheButton: boolean = false;
  showTheButtonAfterSeconds: number = 3; // 10; TODO

  wordPair: string = "";
  randomWord: string = "";

  yesNoAnswer: string = "";
  yesNoAnswerShownAtTime = Date.now();

  realWords: string[] = realWords.map(x => x);
  fakeWords: string[] = fakeWords.map(x => x);
  wordPairs: string[] = wordPairs.map(x => x);

  c1Records: C1RecordData[] = [];

  constructor(private router : Router, @Inject(DOCUMENT) private document: any, private notionService: NotionApiService) { }

  ngOnInit(): void {
    
    this.name = this.router.url.split('/')[2];
    this.wordPair = this.getRandomRealWord();
    this.randomWord = this.getRandomWord();

    setTimeout(() => {
      this.next()
    }, this.showTheButtonAfterSeconds * 1000);
  }

  //gives a random number in between 0 - max, not including max
  getRandomNumber(max: number): number {
    return  Math.floor(Math.random() * (max));
  }

  getRandomRealWord() {
    // get the word
    let randomIndex = this.getRandomNumber(this.realWords.length);
    let word = this.realWords[randomIndex] + " - " + this.wordPairs[randomIndex];
    this.randomWord = this.wordPairs[randomIndex];

    // remove the word so that we don't sellect again
    this.realWords.splice(randomIndex, 1);
    this.wordPairs.splice(randomIndex, 1);
    return word;
  }

  getRandomWord() {
    if (Math.random() > 0.5) {
      // when geting word pair it also sets the random word to the real word pair
      // so if we were gonna get a realy word just return the already changed word
      return this.randomWord;
    }
    // get the word
    let randomIndex = this.getRandomNumber(this.fakeWords.length);
    let word = this.fakeWords[randomIndex];
    // remove the word so that we don't sellect again
    this.fakeWords.splice(randomIndex, 1);
    return word;
  }

  wordNonWordChoiceMade(choice: string) {
    this.yesNoAnswer = choice;
    this.next();
  }

  printStuffForMeDebug() {
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
  }

  next() {
    // only show the word
    if (this.atWord % 2 == 0) {
      // next word
      this.atWord++;
      // button timer
      this.showTheButton = false;
      this.yesNoAnswerShownAtTime = Date.now();
      return;
    } 
    // buton answer
    // the part with word, non word
    if (this.yesNoAnswer === "" || this.yesNoAnswer === null || this.yesNoAnswer === undefined) return;
    let nameWithIndex = `${this.name}-${Math.floor(this.atWord / 2)}`
    let record = new C1RecordData(nameWithIndex, this.wordPair, this.randomWord, this.yesNoAnswer, Date.now()-this.yesNoAnswerShownAtTime);
    
    this.notionService.saveToC1Table(record);
    this.c1Records.push(record);
  

    this.atWord = this.atWord + 1;

    // if at the last word we exit
    if (this.atWord == this.testNum) {
      //TODO delete this
      this.printStuffForMeDebug();

      this.closeFullscreen();
      this.router.navigate([`done`]);
    }

    // set the new datas
    this.wordPair = this.getRandomRealWord();
    this.randomWord = this.getRandomWord();
    this.yesNoAnswer = "";

    // This is for if we going to show the single word after some time force to word pair
    // button timer
    this.showTheButton = false;
    setTimeout(() => {
      this.next();
    }, this.showTheButtonAfterSeconds * 1000);
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
