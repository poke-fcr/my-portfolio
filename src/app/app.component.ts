import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ValueService } from './service/value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';

  constructor(private http: HttpClient, private valueSvc: ValueService) {}
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 920) {
      this.valueSvc.screenSizeLtMedium.next(true);
    } else {
      this.valueSvc.screenSizeLtMedium.next(false);
    }
  }
}
