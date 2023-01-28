import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  timeInterval = 1500;
  constructor() {}

  ngOnInit() {
  //  this.initiateDOM()
  this.startAnimation()
  }

  startAnimation() {
    let textWrapper = document.querySelector('.my-description');
    if (textWrapper && textWrapper.textContent)
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

    anime
      .timeline()
      .add({
        delay:2000
      })
      .add({
        targets: '.image-resize',
        translateX: ['-2500px', 0], // -> '250px'
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
      })
      .add({
        targets: '.my-description .letter',
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i) => 50 * i,
      })
  }

  
   
}
