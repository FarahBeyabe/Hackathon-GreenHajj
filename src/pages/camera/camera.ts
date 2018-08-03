import { Component } from '@angular/core';
import { ModalController,ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {ServicePage} from '../service/service'
import {PointsPage} from '../points/points'
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(public navCtrl: NavController,
    private qrScanner: QRScanner,
    private modalCtrl:ModalController,
  private view:ViewController) {
  }

  showModal(){
    
      let modal = this.modalCtrl.create("SuccessDialogPage",
                                        {showBackdrop:true,enableBackdropDismiss: true,message:"hajj.congrats"},
                                        {cssClass: 'successModalClass'});
                                        modal.onDidDismiss(data => {
                                          this.view.dismiss();
                                          this.navCtrl.setRoot(PointsPage);
                                        });
      modal.present();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }


 ionViewWillEnter(){
  this.showCamera();
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         //alert(text);
         this.navCtrl.setRoot(ServicePage);
         this.showModal();

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
}
 ionViewWillLeave(){
    this.hideCamera(); 
 }
  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  
  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
