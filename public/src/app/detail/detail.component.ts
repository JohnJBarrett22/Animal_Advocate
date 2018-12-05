import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
singlePet: any;
liked: boolean;
pet: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findPet();
    this.liked = false;
  }

  findPet(){
    console.log("~Component: findPet() initialzed~")
    this._route.params.subscribe((params)=>{
    console.log("~ID:", params["id"])
      let tempObs = this._httpService.getOnePet(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.singlePet = data;
        console.log("~Component: findPet response~", this.singlePet)
      })
    })
  }

  deletePet(id:string){
    console.log("~Component: deletePet() initialzed~")
    let tempObs = this._httpService.deletePet(id);
    tempObs.subscribe(data=>{
      console.log("~Component: deletePet() response~,", data)
      this._router.navigate(["/pets"]);
    })
  }

  likePet(id:string){
    console.log("~Component: likePet() initialzed~")
    let tempObs = this._httpService.likePet(id);
    tempObs.subscribe((data:any)=>{
      this.liked = true;
      this.refreshPage(id);
      console.log("~Component: likePet() response~,", data)
    })
  }

  refreshPage(id:string){
    console.log("~Component: refreshPage() initialzed~")
    let tempObs = this._httpService.getOnePet(id);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: refreshPage() response~", data)
      this.singlePet = data;
    })
  }
}
