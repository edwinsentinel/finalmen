import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class WcfService {

  constructor( private http: HTTP) { }

  public Count : number =0;
  public dbname: String ="S11";
  public Fetched_phone: string;
  public Fetched_user: string;
  public User_id: string;
  Mcode ="";
  Username ="";
  Password = "";
  Prompt_Msg ="Wait..";
  feedback_Msg ="Wait..";
  tracking_Msg ="Wait..";
  activity_Msg ="Wait..";
  Startbit = "7878";
  Stopbit = "7979";
  Reg = "";
  Wherestatus='';
  Onlinestatus='';
  lat=null;
  lon=null;
  nowReg = "";  
  ActDate1 = "";
  Actdate2= "";
  ActAmo = "0";
  Acttype = "";
  Stype = "";
  Seldate1=null;
  Seldate2=null;
  nowlat=null;
  nowlon=null;
  public WcfUser;
  public Wcfemail = 'None';  
  tripid;


  names='Tony';
  password = '123456';
 Cont = this.names + ';' + this.password

getusers(Cont){

  return new Promise((resolve, reject) =>{  
 
    var Protocal = "02";
    var Content = this.stringToHex(Cont);
    var MsgLens = Content.length;
    var MsgLength = ('000' + MsgLens).slice(-4); 
    var Message2 = this.Startbit  + Protocal   + MsgLength  + Content  + this.Stopbit;
    var MainURL = "http://mop.logistics.co.ke/Jujus.svc/Client_Connection?Content=";
    var Searchurl = MainURL+ Message2;
   // console.log("link " + Searchurl);

   this.http.get(Searchurl,{},{})
   .then((data) => {     
     Response = data.data;       
     
     var returned = data.data;
     var Result = returned.replace("\"","");
     var rt = Result.replace("\"", "");
     var rt2 = rt.replace('"', "");
     console.log('return ' + rt2);        
      if (rt2 =="Error") {
        reject("username not found");
      }else{
        resolve(rt2);     
      }
  
    })
    .catch((error) => {
     
      console.log('host 1 error: ' + error.error);
      var err = error.error;   
      if (err ==="The host could not be resolved"){
        console.log("hatupati host"); 
      }
      reject(err);
    })
  })

}




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


 public HextoString(str) {
     // console.log('hexing back');  
      
      try {
           var j;
           var hexes = str.match(/.{1,4}/g) || [];
           var back = '';

          for (j=0 ; j<hexes.length;j++){
            back += String.fromCharCode(parseInt(hexes[j],16));
          }
         // console.log('hex back'  +back);       
          return back;
        
      } catch (error) {
        console.log('error '  + error);  
      }
     
      }


}