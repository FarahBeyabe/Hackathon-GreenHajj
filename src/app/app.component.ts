import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabbarPage } from '../pages/tabbar/tabbar';

import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pageTitle: string ="sidemenu.title";
  pages: Array<{title: string, component: any, icon:string , tabbarIndex : any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private translate: TranslateService,public event:Events) {
    translate.setDefaultLang('ar');
    this.initializeApp();
  

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "sidemenu.maintain", component: "HomePage" , icon:"custom-icon-maintain",tabbarIndex:3},
      { title: "sidemenu.myOrders", component: "ListPage" , icon:"custom-icon-orders" ,tabbarIndex:1},
      { title: "sidemenu.myProfile", component: "ProfilePage" , icon:"custom-icon-profile" ,tabbarIndex:2},
      { title: "sidemenu.contactUS", component: "ContactusPage" , icon:"custom-icon-contactus" ,tabbarIndex:4}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.push(page.component);
    this.event.publish("openPage",index);
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
