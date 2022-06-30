import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meric';

  constructor(private router: Router) {

  }

  goToPage(url: string): void{
    this.router.navigate([url]);
  }
}
