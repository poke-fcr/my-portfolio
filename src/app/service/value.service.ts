import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  screenSizeLtMedium = new BehaviorSubject<boolean>(false)
  private sideBarMenuToggle = new BehaviorSubject<boolean>(false)
  sideBarMenuToggle$ = this.sideBarMenuToggle.asObservable()

  setSideBarMenuToggle(v: boolean){
    this.sideBarMenuToggle.next(v)
  }

  constructor() {
   }
}
