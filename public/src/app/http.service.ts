import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user = String;
  userId = String;
  signedIn = false;

  constructor(private _http: HttpClient) { }

  //Pet
  getAllPets(){
    console.log("~Service: getAllPets() initialized~");
    return this._http.get("/api/pets");
  }

  getAllDogs(){
    console.log("~Service: getAllDogs() initialized~");
    return this._http.get("/api/pets/dogs");
  }

  getAllCats(){
    console.log("~Service: getAllCats() initialized~");
    return this._http.get("/api/pets/cats");
  }

  getOnePet(id:string){
    console.log("~Service: getOnePet() initialized~", id);
    return this._http.get("/api/pets/"+id);
  }

  postPet(petObj){
    console.log("~Service: postPet() initialized~", petObj);
    return this._http.post("/api/pets", petObj);
  }

  editPet(id:string, editPet:object){
    console.log("~Service: editPet() initialized~", editPet);
    return this._http.put("/api/pets/"+id, editPet);
  }

  deletePet(id:string){
    console.log("~Service: deletePet() initialized~", id);
    return this._http.delete("/api/pets/"+id);
  }

  likePet(id:string){
    console.log("~Service: likePet() initialized~", id);
    return this._http.get("/api/like/"+id);
  }

  //Shelter
  retriveShelters(){
    let shelters = this._http.get("https://pokeapi.co/api/v2/ability/65/");
    shelters.subscribe((data:any) => {
      console.log(data);
    })
  }

  //User
  postUser(userObj){
    console.log("~Service: postUser() initialized~", userObj);
    return this._http.post("/api/users", userObj);
  }

  loginUser(userObj){
    console.log("~Service: loginUser() initialized~", userObj);
    return this._http.post("/api/login", userObj);
  }

  logout(){
    console.log("~Service: logout() initialized~");
    return this._http.get("/api/logout");
  }

  authenticate() {
    console.log("~Service: authenticate() initialized~");
    return this._http.get('api/current_user');
  }

  getOneUser(id:string){
    console.log("~Service: getOneUser() initialized~", id);
    return this._http.get("/api/users/"+id);
  }

  editUser(id:string, editUser:object){
    console.log("~Service: editUser() initialized~", editUser);
    return this._http.put("/api/users/"+id, editUser);
  }
}