import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  constructor(private router: Router) { }
  dashboard() {
    // this.navCtrl.push(DashboardPage)
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }

}
