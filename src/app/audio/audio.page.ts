import { Component, OnInit } from '@angular/core';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  constructor(private streamingMedia: StreamingMedia) { }

startAudio() {
  const options: StreamingAudioOptions = {
    successCallback: () => {console.log(); },
// tslint:disable-next-line: no-unused-expression
    errorCallback: () => {console.log; },
    initFullscreen: false,
  };
this.streamingMedia.playAudio('http://naijaloaded.store/wp-content/uploads/2018/10/Patoranking-%E2%80%93-Everyday.mp3', options);
}




  ngOnInit() {
  }

}
