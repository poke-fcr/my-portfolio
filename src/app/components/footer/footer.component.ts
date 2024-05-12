import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isScreenSizeLtMedium: boolean = false

  constructor(private valueSvc: ValueService) { }

  ngOnInit() {
    this.valueSvc.screenSizeLtMedium.subscribe((value:boolean)=>{
      this.isScreenSizeLtMedium = value
      console.log(value)
    })
  }
  
 

}
