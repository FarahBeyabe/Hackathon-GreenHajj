import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the PointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-points',
  templateUrl: 'points.html',
})
export class PointsPage {
  barTitle:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public translate:TranslateService) {
    this.translate.get('hajj.rewards').subscribe(
			value => {
				this.barTitle = value;
			}
		);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointsPage');
  }

}
