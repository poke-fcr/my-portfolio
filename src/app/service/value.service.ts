import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  screenSizeLtMedium = new BehaviorSubject<boolean>(false)
  constructor() {
   }
}
