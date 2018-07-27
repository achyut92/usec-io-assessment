import {Component} from '@angular/core';

@Component({
  selector: 'mudash',
  styleUrls: ['./mudash.scss'],
  templateUrl: './mudash.html'
})
export class Dashboard {

  navbarOpen = false;
  
  constructor() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
