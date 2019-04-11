import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public cont: string ;
  Names: "";
  phone: "";
  Email: "";
  Password: "";
  // Cont =  Names + ';' + phone  + ';' + Email  + ';' + Password;
  Cont= this.Names + ';' + this.phone +  ';' + this.Email + ';' + this.Password;
  Startbit="";
  Stopbit="";
  constructor(private router: Router) { }


  public stringToHex(str) {
    //console.log('hexing');  
    
    try {
         var hex,i;
         var results = '';         
        for (i=0 ; i<str.length;i++){
          hex = str.charCodeAt(i).toString(16);
          results += ('000' + hex).slice(-2);
        }
       // console.log('hex is'  + hex);  
        return results;
      
    } catch (error) {
      console.log('error '  + error);  
    }
   
    }


  Ins(){

    var Protocal = "02";
    // var Content = this.stringToHex(Cont);
    console.log("getting cont")
    var Content = this.stringToHex(this.Cont);
    console.log("Cont Fetched")
    var MsgLens = Content.length;
    console.log("Content")
    var MsgLength = ('000' + MsgLens).slice(-4); 
    console.log("Slice")
    var Message2 = this.Startbit  + Protocal   + MsgLength  + Content  + this.Stopbit;
    var MainURL = "http://mop.logistics.co.ke/Jujus.svc/Client_New?Content=";
    console.log("Saving")
    var Searchurl = MainURL+ Message2;
    console.log("Saved")
    this.Go_to();
}

Go_to(){

  this.router.navigate(['/dashboard']);
}

  ngOnInit() {
    this.Ins
  }

}
