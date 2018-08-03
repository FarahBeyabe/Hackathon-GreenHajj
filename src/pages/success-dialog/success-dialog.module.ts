import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessDialogPage } from './success-dialog';
import { TranslateModule } from '@ngx-translate/core';
import { InfoMessageComponentModule } from '../../components/info-message/info-message.module';
@NgModule({
  declarations: [
    SuccessDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessDialogPage),
    TranslateModule.forChild(),
    InfoMessageComponentModule
  ],
})
export class SuccessDialogPageModule {}
