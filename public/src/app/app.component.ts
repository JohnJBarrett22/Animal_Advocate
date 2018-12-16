import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ChatService } from "./chat.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent {
  user = this._httpService.user;
  room: String;
  messageText: String;
  messageArray: Array<{user: String, message: String}> = [];
  isCollapsed = true;

  constructor(private _httpService: HttpService, private _chatService: ChatService, private _router: Router) {
    this._chatService.newUserJoined().subscribe(data => this.messageArray.push(data));
    this._chatService.userLeftRoom().subscribe(data => this.messageArray.push(data));
    this._chatService.newMessageReceived().subscribe(data => this.messageArray.push(data));
  }

  join(){
    this._chatService.joinRoom({user:this.user, room:this.room});
  }
  
  leave(){
    this._chatService.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage(){
    this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }

  logout() {
    let tempObservable = this._httpService.logout();
    tempObservable.subscribe();
    this._router.navigate(['/']);
    }
}
