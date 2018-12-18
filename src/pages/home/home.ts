import { Component, NgZone } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public zone: NgZone) {}
  progress: number = 0;
  downloading() {
    var path:String[]= new Array("http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/robertskruid900.jpg", "http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/hertshooi900.jpg", "http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/koekoeksbloem900.jpg", "http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/blauwe_bloem900.jpg");
   var count=1;
    for(var i=0;i<path.length;i++){
      if(count>i) {
      (<any>window).DownloadManager.enqueue(
       path[i],
        success => {
          console.log(success);
          this.zone.run(() => {
          this.progress = success;
          if(this.progress==100) {
            count++;
          }
          });
        },
        fail => {
          console.log(fail);
          alert("fail");
          count++;
        }
      );
      
    }
  }
  }
}
