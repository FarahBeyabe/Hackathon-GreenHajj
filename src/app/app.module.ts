import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { TabbarPage } from '../pages/tabbar/tabbar';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {GoogleMaps,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { Ionic2RatingModule } from 'ionic2-rating';
import { NativeStorage } from '@ionic-native/native-storage';
import { RestProvider } from '../providers/rest/rest';
import { HTTP } from '@ionic-native/http';
import {LoginPage} from '../pages/login/login'
import {ServicePage} from '../pages/service/service'
import {PointsPage} from '../pages/points/points'
import {ProfilePage} from '../pages/profile/profile'
import {AboutPage} from '../pages/about/about'
import { NgxQRCodeModule } from 'ngx-qrcode2';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    TabbarPage,
    LoginPage,
    ServicePage,
    PointsPage,
    ProfilePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ''
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    Ionic2RatingModule,
    NgxQRCodeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabbarPage,
    LoginPage,
    ServicePage,
    PointsPage,
    ProfilePage,
    AboutPage
    
  ],
  providers: [
    GoogleMaps,
    Geolocation,
    NativeGeocoder,
    NativeStorage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HTTP

  ]
})
export class AppModule {}
