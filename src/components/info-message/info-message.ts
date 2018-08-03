import { Component,ViewChild, Renderer, Input } from '@angular/core';
/**
 * Generated class for the InfoMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-message',
  templateUrl: 'info-message.html'
})
export class InfoMessageComponent {

  translatedMessage: string;
  customIcon: string;
  @Input('textMessage') textMessage;
  @Input('iconName') iconName;
  constructor() {
    console.log('Hello InfoMessageComponent Component');
    
  }

  ngAfterViewInit(){
    this.translatedMessage = this.textMessage;
    this.customIcon = this.iconName;
  }

}
