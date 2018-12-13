import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  allCats = [];

  constructor(private _httpService: HttpService,  private _router: Router) { }

  ngOnInit() {
    this.loadCats()
  }

  loadCats(){
    console.log("~Component: loadCats() initialzed~")
    let tempObs = this._httpService.getAllCats();
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadCats() response~", data)
      this.allCats = data;
    })
  }
}