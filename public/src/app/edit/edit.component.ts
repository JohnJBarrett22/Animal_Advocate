import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editPet: any;
  errors = [];

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.editPet = {petName: "", petType: "", petBreed: "", petAge: "", petCharacteristics: "", petCoatLength: "", petHouseTrained: "", petPictureLink: "", likes: 0}
    this.findPet();
  }

  findPet(){
    console.log("~Component: findPet() initialzed~")
    this._route.params.subscribe((params)=>{
    console.log("~ID:", params["id"])
      let tempObs = this._httpService.getOnePet(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.editPet = data;
        console.log("~Component: findPet response~", this.editPet)
      })
    })
  }

  editSubmit(){
    console.log("~Component: editSubmit() initialzed~")
    this.errors = []
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.editPet(params['id'], this.editPet);
      tempObs.subscribe((data:any) => {
        console.log("~Component: editSubmit() response~:", data)
        if(data['errors']){
          for(var key in data["errors"]){
            console.log(data["errors"][key]["message"]);
            this.errors.push(data["errors"][key]["message"]);
          }
        }else{
          console.log("~Component: editSubmit() successful~")
          this.editPet = {petName: "", petType: "", petBreed: "", petAge: "", petCharacteristics: "", petCoatLength: "", petHouseTrained: "", petPictureLink: "", likes: 0}
          this._router.navigate(["/pets"]);
        }
      })
    })
  }
}