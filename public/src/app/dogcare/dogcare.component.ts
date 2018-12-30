import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dogcare',
  templateUrl: './dogcare.component.html',
  styleUrls: ['./dogcare.component.css'],
  providers: [NgbCarouselConfig]
})
export class DogcareComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
  }

}