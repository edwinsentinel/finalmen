import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-def',
  templateUrl: './def.page.html',
  styleUrls: ['./def.page.scss'],
})
export class DefPage implements OnInit {
  public count:number=1;
  constructor(private router: Router) { }


  goToDash()
  {
    if(this.count > 0)
    {
      this.router.navigate(['/dashboard']);
    
    }
     else
    {
      this.router.navigate(['/intoapp']);
     
    }
  }
  
  bck(){
    this.router.navigate(['/intoapp']);
  }

  
  ngOnInit() {
  }

}
