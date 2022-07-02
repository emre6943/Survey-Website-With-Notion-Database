import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  name : string = "";
  showTheButton: boolean = false;
  showTheButtonAfterSeconds: number = 1;//5; TODO

  constructor(private router: Router) { }

  // this ngOninit method is automaticlly called whenever the page loads
  ngOnInit(): void {
    // this makes it so that after that many ms it will run whatever is in it
    setTimeout(() => {
      this.showTheButton = true;
    }, this.showTheButtonAfterSeconds * 1000);
  }

  goToExperiment(): void {
    if (this.name === "" || this.name === null || this.name === undefined) {
      return;
    }
    let testNum = 2;//Math.floor(Math.random() * 2) + 1; TODO
    this.router.navigate([`c${testNum.toString()}/${this.name}`]);
  }

}
