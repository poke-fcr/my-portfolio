import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  screenSizeLtMedium = new Subscription(Boolean)
  constructor() {




   }
}
