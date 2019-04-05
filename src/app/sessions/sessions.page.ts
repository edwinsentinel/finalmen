import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  podcasts() {
    this.router.navigate(['/podcasts']);
  }
  othersessions() {
    this.router.navigate(['/othersessions']);
  }
}
