import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController ,Tabs,Platform, Events} from 'ionic-angular';
import { ViewChild } from '@angular/core';
// import {ProfilePage} from '../profile/profile';
// import { HomePage } from '../home/home';
// import { ContactusPage } from '../contactus/contactus';
// import { OrdersPage } from '../orders/orders';
import {ServicePage} from '../service/service'
import {PointsPage} from '../points/points'
import {AboutPage} from '../about/about'
import {ProfilePage} from '../profile/profile'
import {CameraPage} from '../camera/camera'



/**
 * Generated class for the TabbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabbar',
  templateUrl: 'tabbar.html',
})
export class TabbarPage {
  @ViewChild('myTabs') tabRef: Tabs;
    tab1:any = ServicePage;
    tab2:any = PointsPage;
    tab3:any = ProfilePage;
    tab4:any = CameraPage;
    tab5:any = AboutPage;
  // tab2:any = OrdersPage;
  // tab3:any = ProfilePage;
  // tab4:any = HomePage;
  // tab5:any = ContactusPage;
  OrdersNumber:number = 1;
  constructor(public event:Events, public platform: Platform,public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.event.subscribe("openPage",(index)=>{
     this.tabRef.select(index);
   })
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    
   }
  

  

  openSideMenu(){
    this.menuCtrl.toggle('right');
  }

}
