import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-othersessions',
  templateUrl: './othersessions.page.html',
  styleUrls: ['./othersessions.page.scss'],
})
export class OthersessionsPage implements OnInit {

  constructor(private router: Router) { }

  podcasts() {
    this.router.navigate(['/podcasts']);
  }
  ngOnInit() {
  }

}
