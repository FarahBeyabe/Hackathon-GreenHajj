import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the RegisterationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {ServicePage} from '../service/service'
@IonicPage()
@Component({
  selector: 'page-registeration',
  templateUrl: 'registeration.html',
})
export class RegisterationPage {
  mobileNumber:any;
  registerationForm: FormGroup;
  constructor(private nativeStorage: NativeStorage,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterationPage');
  } 

  gotoHomePage(){  
    this.navCtrl.push(ServicePage);      
  }

}
