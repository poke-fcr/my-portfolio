import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/service/value.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private valueSvc: ValueService) { }

  ngOnInit(): void {
  }

  close() {
    this.valueSvc.setSideBarMenuToggle(false)
  }

}
