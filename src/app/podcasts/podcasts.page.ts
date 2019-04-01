import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.page.html',
  styleUrls: ['./podcasts.page.scss'],
})
export class PodcastsPage implements OnInit {
vid = 'https://www.youtube.com/embed/wyVM1evRxNw';
  data: { 'heading': string; 'Date': string; 'Activity': string; };
  constructor(public navctrl: NavController, private dom: DomSanitizer) {

  }
sanitize(vid) {
return this.dom.bypassSecurityTrustResourceUrl(vid);
}
ngOnInit() {
  setTimeout(() => {
    this.data = {
      'heading': 'Schedule',
      'Date': '02/11/2019',
      'Activity': 'Service.'
    };
  }, 5000);
}

}
