import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orientation, PageFlip, SizeType } from 'page-flip';
import { Subscription } from 'rxjs';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-learning-journey',
  templateUrl: './learning-journey.component.html',
  styleUrls: ['./learning-journey.component.scss']
})
export class LearningJourneyComponent implements OnInit, AfterViewInit, OnDestroy {
  isScreenSizeLtMedium: boolean = false
  screenSizeLtMedium$!: Subscription
  constructor(private valueSvc: ValueService, private router: Router,
    private route: ActivatedRoute) { }
  ngAfterViewInit() {

    let id = document.getElementById("magazine")
    let bookWidth = this.isScreenSizeLtMedium ? (this.getWidth() * 0.85) : (this.getWidth() / 3.5)
    let bookHeight = bookWidth * 1.4
    document.getElementById("magazine")?.setAttribute("style", `width:${bookWidth}px`);
    document.getElementById("magazine")?.setAttribute("style", `height:${bookHeight}px`);

    console.log(bookWidth)
    const pageFlip = new PageFlip(id!, {
      width: bookWidth, // required parameter - base page width
      height: bookHeight, // required parameter - base page height
      showCover: true,
      maxShadowOpacity: 1,

      // mobileScrollSupport: false,

    })
    // pageFlip.updateOrientation(Orientation.PORTRAIT)
    pageFlip.loadFromHTML(document.querySelectorAll('.text'));
    // pageFlip.on('flip', ()=>{
    //   document?.getElementById('magazine')?.scrollIntoView();
    // })  
  }



  ngOnInit() {
    this.screenSizeLtMedium$ = this.valueSvc.screenSizeLtMedium.subscribe((value: boolean) => {
      this.isScreenSizeLtMedium = value
      console.log(value)
    })
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

  ngOnDestroy(): void {
    if (this.screenSizeLtMedium$) {
      this.screenSizeLtMedium$.unsubscribe()
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });
  }

}
