import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name:string;
  mobile:string;
  points:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = "عبد الله محمد";
    this.mobile = "0096654128754";
    this.points = "80"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
