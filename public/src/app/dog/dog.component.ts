import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  allDogs = [];

  constructor(private _httpService: HttpService,  private _router: Router) { }

  ngOnInit() {
    this.loadDogs()
  }

  loadDogs(){
    console.log("~Component: loadDogs() initialzed~")
    let tempObs = this._httpService.getAllDogs();
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadDogs() response~", data)
      this.allDogs = data;
    })
  }
}
