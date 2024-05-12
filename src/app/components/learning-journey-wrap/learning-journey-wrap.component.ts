import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogConfig,
} from '@angular/material/dialog';
import { LearningJourneyComponent } from '../learning-journey/learning-journey.component';

@Component({
  selector: 'app-learning-journey-wrap',
  templateUrl: './learning-journey-wrap.component.html',
  styleUrls: ['./learning-journey-wrap.component.scss'],
})
export class LearningJourneyWrapComponent implements AfterViewInit {
  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    let config: MatDialogConfig = {
      hasBackdrop: true,
      // backdropClass: '',
      width: '99vw',
      height: '99vh'
    };
  this.dialog.open(LearningJourneyComponent, config);
  }
}
