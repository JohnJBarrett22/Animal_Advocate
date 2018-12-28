import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editUser: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findUser();
  }

  findUser(){
    console.log("~Component: findUser() initialzed~")
    this._route.params.subscribe((params)=>{
    console.log("~ID:", params["id"])
      let tempObs = this._httpService.getOneUser(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.editUser = data;
        console.log("~Component: findUser() response~", this.editUser)
      })
    })
  }

}
