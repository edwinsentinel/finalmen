import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-intoapp',
  templateUrl: './intoapp.page.html',
  styleUrls: ['./intoapp.page.scss'],
})
export class IntoappPage implements OnInit {

  constructor(private router: Router) { }
  dashboard() {
    // this.navCtrl.push(DashboardPage)
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }

}
