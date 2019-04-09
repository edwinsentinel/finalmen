import { Component, OnInit } from '@angular/core';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-videomedia',
  templateUrl: './videomedia.page.html',
  styleUrls: ['./videomedia.page.scss'],
})
export class VideomediaPage implements OnInit {

  constructor(private streamingMedia: StreamingMedia) { }

startVideo() {
  const options: StreamingVideoOptions = {
      successCallback: () => { console.log(); },
      errorCallback: () => {console.log(); },
      orientation: 'portrait'

  };
  this.streamingMedia.playVideo('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4' , options);
}




  ngOnInit() {
  }

}
