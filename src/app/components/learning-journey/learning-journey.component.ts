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
      width: this.getWidth() / 3.8, // required parameter - base page width
      height: (this.getWidth() / 3.8) * 1.4, // required parameter - base page height
      showCover: true,
      maxShadowOpacity: 1,
      // mobileScrollSupport: false,
      
  });
  pageFlip.loadFromHTML(document.querySelectorAll('.text'));
  // pageFlip.on('flip', ()=>{
  //   document?.getElementById('magazine')?.scrollIntoView();
  // })  
}

  

  ngOnInit() {
  }

  getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
  
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
  
    if (document.body) {
      return document.body.clientWidth;
    }
    return 0
  }

  getHeight() {
    if (self.innerHeight) {
      return self.innerHeight;
    }
  
    if (document.documentElement && document.documentElement.clientHeight) {
      return document.documentElement.clientHeight;
    }
  
    if (document.body) {
      return document.body.clientHeight;
    }
    return 0
  }

}
