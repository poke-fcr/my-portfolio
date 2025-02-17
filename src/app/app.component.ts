import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LearningJourneyComponent } from './components/learning-journey/learning-journey.component';
import { ValueService } from './service/value.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-portfolio';
  sideMenuToggle = false
  sideMenuToggleSubscription!: Subscription
  screenSizeLtMedium = false

  constructor(private http: HttpClient, private valueSvc: ValueService, private dialog: MatDialog) { }
  ngOnInit() {
    this.onResize();
    this.sideMenuToggleSubscription = this.valueSvc.sideBarMenuToggle$.subscribe((v: boolean) => this.sideMenuToggle = v)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 720) {
      this.screenSizeLtMedium = true
      this.valueSvc.screenSizeLtMedium.next(true);
    } else {
      this.screenSizeLtMedium = false
      this.valueSvc.screenSizeLtMedium.next(false);
    }
  }

  openLearningJourney() {
    let config: MatDialogConfig = {
      hasBackdrop: true,
      // backdropClass: '',
      width: '99vw',
      height: '99vh'
    };
    this.dialog.open(LearningJourneyComponent, config);
  }

  shareContent() {
    if (navigator.share) {
      navigator.share({
        title: 'Hey checkout this app!',
        text: 'I found something interesting. Take a look!',
        url: window.location.href,
      })
        .then(() => console.log('Content shared successfully'))
        .catch((error) => console.error('Error sharing content:', error));
    } else {
      alert('Sharing not supported in this browser.');
    }
  }

  openSideBarMenuToggle() {
    this.valueSvc.setSideBarMenuToggle(true)
  }

  ngOnDestroy(): void {
    if (this.sideMenuToggleSubscription) {
      this.sideMenuToggleSubscription.unsubscribe()
    }
  }

}
