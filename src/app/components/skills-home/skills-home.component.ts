import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-skills-home',
  templateUrl: './skills-home.component.html',
  styleUrls: ['./skills-home.component.scss'],
})
export class SkillsHomeComponent implements OnInit {
  imageList = [
    './../../../assets/skills/angular.png',
    './../../../assets/skills/node.png',
    './../../../assets/skills/css.png',
    './../../../assets/skills/github.png',
    './../../../assets/skills/html5.png',
    './../../../assets/skills/java.png',
    './../../../assets/skills/js.png',
    './../../../assets/skills/mongodb.png',
    './../../../assets/skills/mysql.png',
    './../../../assets/skills/ts.png',
  ];
  current = 0;
  isScreenSizeLtMedium: boolean = false;
  next = (this.current + 1) % this.imageList.length;
  previous = this.imageList.length - 1;
  constructor(private valueSvc: ValueService) {}
  ngOnInit() {
    this.valueSvc.screenSizeLtMedium.subscribe((value: boolean) => {
      this.isScreenSizeLtMedium = value;
      console.log(value);
    });
  }

  navigateNext() {
    this.previous = this.current;
    this.current = (this.current + 1) % this.imageList.length;
    this.next = (this.current + 1) % this.imageList.length;
  }

  navigatePrevious() {
    this.current > 0
      ? (this.current = this.current - 1)
      : (this.current = this.imageList.length - 1);
    this.next = this.current - 1;
    this.previous =
      this.current > 0 ? this.current - 1 : this.imageList.length - 1;
  }
}
