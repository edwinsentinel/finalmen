import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sacco',
  templateUrl: './sacco.page.html',
  styleUrls: ['./sacco.page.scss'],
})
export class SaccoPage implements OnInit {
  data: { 'heading': string; 'Date': string; 'Activity': string; };

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.data = {
        'heading': 'Schedule',
        'Date': '02/11/2019',
        'Activity': 'Service.'
      };
    }, 5000);
  }

  memberregister() {
    this.router.navigate(['/memberregistration']);
  }
}
