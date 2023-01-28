import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let textWrapper = document.querySelector('.my-description');
    if (textWrapper && textWrapper.textContent)
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.image-resize',
        translateX: ['-2500px', 0], // -> '250px'
        easing: 'easeOutExpo',
        duration: 2000,
      })
      .add({
        targets: '.my-description .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.my-description',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }
}
