import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPets = [];

  constructor(private _httpService: HttpService,  private _router: Router) { }

  ngOnInit() {
    this.loadPage()
  }

  loadPage(){
    console.log("~Component: loadPage() initialzed~")
    console.log("USER", this._httpService.user)
    let tempObs = this._httpService.getAllPets();
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadPage() response~", data)
      this.allPets = data;
    })
  }
}