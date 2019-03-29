import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sacco',
  templateUrl: './sacco.page.html',
  styleUrls: ['./sacco.page.scss'],
})
export class SaccoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  memberregister() {
    this.router.navigate(['/memberregistration']);
  }
}
