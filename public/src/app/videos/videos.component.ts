import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  url: any;
  videoUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  @ViewChild('content') public contentModal;
  public name: string;

  ngOnInit() {
  }

  show(id:string){
      this.name = id;
      this.url = 'https://www.youtube.com/embed/' + this.name;
      console.log(this.url);
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      console.log(this.videoUrl)
      this.contentModal.show();
  }
}