import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterationPage } from './registeration';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    RegisterationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterationPage),
    TranslateModule.forChild()
  ],
})
export class RegisterationPageModule {}
