import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  name : string = "";
  showTheButton: boolean = false;
  allowCross: boolean = false;
  showTheButtonAfterSeconds: number = 1;//5; TODO

  elem: any;

  constructor(private router: Router, @Inject(DOCUMENT) private document: any) { }

  // this ngOninit method is automaticlly called whenever the page loads
  ngOnInit(): void {
    this.elem = document.documentElement;
    // this makes it so that after that many ms it will run whatever is in it
    setTimeout(() => {
      this.showTheButton = true;
    }, this.showTheButtonAfterSeconds * 1000);
  }

  submit(event: any) {
    if(event.keyCode == 13 && this.showTheButton && this.name != '') {
      this.goToExperiment();
    }
  }

  goToExperiment(): void {
    if (this.name === "" || this.name === null || this.name === undefined) {
      return;
    }
    let testNum = Math.floor(Math.random() * 2) + 1;
    // todo remove this line
    testNum = 1
    this.router.navigate([`c${testNum.toString()}/${this.name}`]);
    this.openFullscreen();
  }

  goToTest(): void {
    this.router.navigate([`test`]);
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
}
