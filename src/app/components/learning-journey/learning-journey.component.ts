import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PageFlip, SizeType } from 'page-flip';

@Component({
  selector: 'app-learning-journey',
  templateUrl: './learning-journey.component.html',
  styleUrls: ['./learning-journey.component.scss']
})
export class LearningJourneyComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit() {
    let id = document.getElementById("magazine")
    const pageFlip = new PageFlip(id!, {
      width: 232, // required parameter - base page width
      height: 325, // required parameter - base page height
      showCover: true,
      maxShadowOpacity: 1,
      mobileScrollSupport: true
      
  });
  pageFlip.loadFromHTML(document.querySelectorAll('.text'));
  }

  ngOnInit() {
  }

}
