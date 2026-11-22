import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValueService } from '../../service/value.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  isScreenSizeLtMedium: boolean = false

  constructor(private valueSvc: ValueService, private router: Router) { }

  ngOnInit() {
    this.valueSvc.screenSizeLtMedium.subscribe((value: boolean) => {
      this.isScreenSizeLtMedium = value
      console.log(value)
    })
  }

  openContactDialog() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.router.navigate(['contact'])
  }

  openQuery() {
    this.router.navigate(['contact'], {queryParams : {rel: 'query'}})
  }

}
