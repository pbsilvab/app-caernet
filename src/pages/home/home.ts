import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { DetallesPage } from '../detalles/detalles';
@Component({ 	
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	personas:object={};

  constructor(public navCtrl: NavController, private qrScanner: QRScanner, public toast: ToastController) { //, private api:ApiProvider	

  }
  detalle(){
  	this.navCtrl.push(DetallesPage, this.personas);
  }
  scanner(){
 	// Optionally request the permission early
		this.qrScanner.prepare()
		  .then((status: QRScannerStatus) => {
		     if (status.authorized) {
		       // camera permission was granted


		       // start scanning
		       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
		       	
		       	
		       	this.presentToast('Escaneo Exitoso', 3000);
		       	this.presentToast(text,10000);

		         this.qrScanner.hide(); // hide camera preview
		         scanSub.unsubscribe(); // stop scanning
		       });

		       // show camera preview
		       this.qrScanner.show();

		       // wait for user to scan something, then the observable callback will be called

		     } else if (status.denied) {
		       // camera permission was permanently denied
		       // you must use QRScanner.openSettings() method to guide the user to the settings page
		       // then they can grant the permission from there
		     } else {
		       // permission was denied, but not permanently. You can ask for permission again at a later time.
		     }
		  })
		  .catch((e: any) => console.log(e));
  }

  presentToast(text, time) {
    let toast = this.toast.create({
      message: text,
      duration: time
    });
    toast.present();
  }


}
