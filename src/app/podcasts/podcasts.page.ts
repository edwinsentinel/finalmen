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
  constructor(public navctrl: NavController, private dom: DomSanitizer) {

  }
sanitize(vid) {
return this.dom.bypassSecurityTrustResourceUrl(vid);
}
  ngOnInit() {
  }

}
