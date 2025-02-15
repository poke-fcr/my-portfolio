import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {
  isScreenSizeLtMedium: boolean = false

  constructor(private valueSvc: ValueService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.valueSvc.screenSizeLtMedium.subscribe((value: boolean) => {
      this.isScreenSizeLtMedium = value
    })

    this.activatedRoute.queryParams.forEach((q: any) => {
      if (q && q.rel) {
        if (q.rel == 'query') {
          let queryFormId = document.getElementById('queryForm')
          var elementPosition = queryFormId?.getBoundingClientRect().top;
          var offsetPosition = (elementPosition || 0) + window.scrollY
          window.scrollTo({ top: offsetPosition })
        }
        else if (q.rel == 'about') {
          let queryFormId = document.getElementById('about')
          var elementPosition = queryFormId?.getBoundingClientRect().top;
          var offsetPosition = (elementPosition || 0) + window.scrollY - 20
          window.scrollTo({ top: offsetPosition })
        } else if (q.rel == 'credit') {
          let queryFormId = document.getElementById('credit')
          var elementPosition = queryFormId?.getBoundingClientRect().top;
          var offsetPosition = (elementPosition || 0) + window.scrollY
          window.scrollTo({ top: offsetPosition })
        } else if (q.rel == 'disclaimer') {
          let queryFormId = document.getElementById('disclaimer')
          var elementPosition = queryFormId?.getBoundingClientRect().top;
          var offsetPosition = (elementPosition || 0) + window.scrollY
          window.scrollTo({ top: offsetPosition })
        }
        else {
          window.scrollTo({ top: 0 })
        }
      }
    })
  }

}
