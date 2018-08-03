import { NgModule } from '@angular/core';
import { InfoMessageComponent } from './info-message';
import { IonicModule } from 'ionic-angular';
import { TranslateModule} from '@ngx-translate/core';

@NgModule({
	declarations: [InfoMessageComponent],
	imports: [
		IonicModule,
		TranslateModule.forChild()
	],
	exports: [InfoMessageComponent]
})
export class InfoMessageComponentModule {}
