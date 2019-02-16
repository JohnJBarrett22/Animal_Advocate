import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rescues',
  templateUrl: './rescues.component.html',
  styleUrls: ['./rescues.component.css']
})
export class RescuesComponent implements OnInit {
  allShelters = [];

  constructor(private _httpService: HttpService,  private _router: Router) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(){
    console.log("~Component: loadPage() initialzed~")
    let tempObs = this._httpService.retriveShelters();
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadPage() response~", data)
      console.log()
      this.allShelters = data;
    })
  }
}
