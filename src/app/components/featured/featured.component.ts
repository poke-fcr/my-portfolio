import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
    imageList = [
    './../../../assets/featured/Infosys Certified Angular Professional-1.jpg',
    './../../../assets/featured/certificate of excellence 2.jpg',
    './../../../assets/featured/newgen-rnr-1.jpg',
    './../../../assets/featured/Best Project PBL.jpg'
  ];
  current = 0;
  isScreenSizeLtMedium: boolean = false
  next = (this.current + 1) % this.imageList.length;
  constructor(private valueSvc: ValueService) {}

  ngOnInit() {
   this.valueSvc.screenSizeLtMedium.subscribe((value:boolean)=>{
      this.isScreenSizeLtMedium = value
      console.log(value)
    })
  }

  navigateNext() {
    this.current = (this.current + 1) % this.imageList.length;
    this.next = (this.current + 1) % this.imageList.length;
  }

  navigatePrevious() {
    this.current > 0 ?  this.current = this.current - 1 : this.current = this.imageList.length - 1
    this.next = this.current - 1;
  }
}
