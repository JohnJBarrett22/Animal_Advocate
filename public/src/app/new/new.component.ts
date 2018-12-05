import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  errors = [];
  

  constructor(private _httpService: HttpService,  private _router: Router) { }
 
  ngOnInit() {
    this.newPet = {petName: "", petType: "", petBreed: "", petAge: "", petCharacteristics: "", petCoatLength: "", petHouseTrained: "", petPictureLink: "", likes: 0}
    // $(document).ready(function(){
    //   $('select').formSelect();
    // });
  }
  
  addPet(){
    console.log("~Component: addPet() initialzed~", this.newPet)
    this.errors = []
    var tempObs = this._httpService.postPet(this.newPet);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: addPet() response~", data);
      if(data['errors']){
        for(var key in data["errors"]){
          console.log(data["errors"][key]["message"]);
          this.errors.push(data["errors"][key]["message"]);
        }
      }else if(data["message"] == "Duplicate pets not allowed!"){
        this.errors.push(data["message"]);
      }else{
        console.log("~Component: addPet() successful~")
        this.newPet = {petName: "", petType: "", petBreed: "", petAge: "", petCharacteristics: "", petCoatLength: "", petHouseTrained: "", petPictureLink: "", likes: 0}
        this._router.navigate(["/pets"]);
      }      
    })
  }
}
