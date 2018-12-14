import { Component } from '@angular/core';
import { ChatService } from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent {
  user: String;
  room: String;
  messageArray: Array<{user: String, message: String}> = [];

  constructor(private _chatService: ChatService) {
    this._chatService.newUserJoined().subscribe(data => this.messageArray.push(data));
  }

  join(){
    this._chatService.joinRoom({user:this.user, room:this.room});
  }
  
}
