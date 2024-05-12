import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LearningJourneyComponent } from './components/learning-journey/learning-journey.component';
import { ValueService } from './service/value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';

  constructor(private http: HttpClient, private valueSvc: ValueService, private dialog: MatDialog) {}
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 720) {
      this.valueSvc.screenSizeLtMedium.next(true);
    } else {
      this.valueSvc.screenSizeLtMedium.next(false);
    }
  }

  openLearningJourney(){
    let config: MatDialogConfig = {
      hasBackdrop: true,
      // backdropClass: '',
      width: '99vw',
      height: '99vh'
    };
  this.dialog.open(LearningJourneyComponent, config);
  }
}
