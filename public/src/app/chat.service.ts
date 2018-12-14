import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io("http://localhost:1337");

  joinRoom(data){
    this.socket.emit("join", data)
  }

  newUserJoined(){
    let observable = new Observable<{user:String, message: String}>(observer=>{
      this.socket.on("userJoined", (data)=>{
        observer.next(data)
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }

  leaveRoom(data){
    this.socket.emit("leave", data);
  }

  userLeftRoom(){
    let observable = new Observable<{user:String, message: String}>(observer=>{
      this.socket.on("leftRoom", (data)=>{
        observer.next(data)
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }

  sendMessage(data){
    this.socket.emit("msg", data)
  }

  newMessageReceived(){
    let observable = new Observable<{user:String, message: String}>(observer=>{
      this.socket.on("newMsg", (data)=>{
        observer.next(data)
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }

  constructor() { }
}
