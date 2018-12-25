import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  singleUser: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.findUser();
  }

  findUser(){
    console.log("~Component: findUser() initialzed~")
    this._route.params.subscribe((params)=>{
    console.log("~ID:", params["id"])
      let tempObs = this._httpService.getOneUser(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.singleUser = data;
        console.log("~Component: findUser() response~", this.singleUser)
      })
    })
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}