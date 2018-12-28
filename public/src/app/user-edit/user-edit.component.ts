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
  errors = [];

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.editUser = {firstName: "", lastName: "", email: "", organization: "", password: ""};
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

  editUserSubmit(){
    console.log("~Component: editUserSubmit() initialzed~")
    this.errors = []
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.editUser(params['id'], this.editUser);
      tempObs.subscribe((data:any) => {
        console.log("~Component: editUserSubmit() response~:", data)
        if(data['errors']){
          for(var key in data["errors"]){
            console.log(data["errors"][key]["message"]);
            this.errors.push(data["errors"][key]["message"]);
          }
        }else{
          console.log("~Component: editUserSubmit() successful~")
          this.editUser = {firstName: "", lastName: "", email: "", organization: "", password: ""};
          this._router.navigate(['/users', this._httpService.userId]);
        }
      })
    })
  }
}