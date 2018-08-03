import { Component } from '@angular/core';
import { ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SuccessDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success-dialog',
  templateUrl: 'success-dialog.html',
})
export class SuccessDialogPage {
  message:string= "";
  customIcon:string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController) {
    this.customIcon = "custom-icon-medals";
    this.message = this.navParams.get("message");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessDialogPage');
  }

  dismiss(){
    this.view.dismiss();
    this.navCtrl.pop();
  }

}
