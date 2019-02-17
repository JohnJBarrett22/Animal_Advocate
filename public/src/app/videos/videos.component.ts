import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.addEventListener("DOMContentLoaded", function() {
    //   let div, n, v = document.getElementsByClassName("youtube-player");
    //   for (n = 0; n < v.length; n++) {
    //     div = document.createElement("div");
    //     div.setAttribute("data-id", v[n].id);
    //     div.setAttribute("class", "middleDiv");
    //     div.innerHTML = loadThumbnail(v[n].id);
    //     div.onclick = loadIframe;
    //     v[n].appendChild(div);
    //   }
    // });

    // function loadThumbnail(id) {
    //   let thumb = '<img class="thumbNail" src="https://i.ytimg.com/vi/ID/hqdefault.jpg">', play = '<div class="play"></div>';
    //   return thumb.replace("ID", id) + play;
    // }

    // function loadIframe() {
    //   let iframe = document.createElement("iframe");
    //   let embed = "https://www.youtube.com/embed/ID?autoplay=1";
    //   iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    //   iframe.setAttribute("frameborder", "0");
    //   iframe.setAttribute("allowfullscreen", "1");
    //   this.parentNode.replaceChild(iframe, this);
    // }
  }
}