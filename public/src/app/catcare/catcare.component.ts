import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catcare',
  templateUrl: './catcare.component.html',
  styleUrls: ['./catcare.component.css'],
  providers: [NgbCarouselConfig]
})
export class CatcareComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
  }

}