import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointsPage } from './points';
import { TranslateModule } from '@ngx-translate/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    PointsPage,
  ],
  imports: [
    IonicPageModule.forChild(PointsPage),
    TranslateModule.forChild(),
    NgCircleProgressModule
  ],
})
export class PointsPageModule {}
