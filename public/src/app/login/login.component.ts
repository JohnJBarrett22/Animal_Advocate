import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbTabsetConfig]
})
export class LoginComponent implements OnInit {
 newUser: any;
 user: any;
 errors = [];

  constructor(private _httpService: HttpService,  private _router: Router, config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'tabs';
   }

  ngOnInit() {
    this.newUser = {firstName: "", lastName: "", email: "", organization: "", password: ""};
    this.user = {email: "", password: ""};
  }

  addUser(){
    console.log("~Component: addUser() initialzed~", this.newUser)
    this.errors = []
    var tempObs = this._httpService.postUser(this.newUser);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: addUser() response~", data);
      if(data['errors']){
        for(var key in data["errors"]){
          console.log(data["errors"][key]["message"]);
          this.errors.push(data["errors"][key]["message"]);
        }
      }else if(data["message"] == "Invalid login credentials!"){
        this.errors.push(data["message"]);
      }else{
        console.log("~Component: addUser() successful~")
        this.newUser = {firstName: "", lastName: "", email: "", organization: "", password: ""}
        this._router.navigate(["/pets"]);
      }      
    })
  }

  login(){
    console.log("~Component: login() initialzed~", this.user)
    this.errors = []
    var tempObs = this._httpService.loginUser(this.user);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: login() response~", data);
      if(data['errors']){
        for(var key in data["errors"]){
          console.log(data["errors"][key]["message"]);
          this.errors.push(data["errors"][key]["message"]);
        }
      }else if(data["message"] == "Invalid login credentials!"){
        this.errors.push(data["message"]);
      }else{
        console.log("~Component: login() successful~")
        this.user = {email: "", password: ""};
        this._router.navigate(["/pets"]);
      }      
    })
  }
}