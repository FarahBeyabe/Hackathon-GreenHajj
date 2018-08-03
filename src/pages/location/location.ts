import { Component } from '@angular/core';
import { ModalController,IonicPage,NavController, NavParams,Platform ,LoadingController} from 'ionic-angular';
import {GoogleMaps, GoogleMap,GoogleMapsEvent,GoogleMapOptions,
  CameraPosition,MarkerOptions,Marker, LatLng,GeocoderResult} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  map: GoogleMap;
  locationValue:string;
  lat:number;
  lng:number;
  address:string;
  locations:any;
  recycle:string;
  constructor(public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              private googleMaps: GoogleMaps,
              public platform: Platform,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,
              private modalCtrl:ModalController) {
      this.address = "";
      this.recycle = "<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 512.109 512.109' style='enable-background:new 0 0 512.109 512.109;' xml:space='preserve' width='512px' height='512px'><g><g><g><g><path d='M94.123,443.692h-0.085c-4.71,0-8.491,3.823-8.491,8.533s3.857,8.533,8.576,8.533c4.71,0,8.533-3.823,8.533-8.533     S98.833,443.692,94.123,443.692z' data-original='#000000' class='active-path' data-old_color='#1faa81' fill='#1faa81'/><path d='M93.867,392.492c-32.939,0-59.733,26.795-59.733,59.733s26.795,59.733,59.733,59.733     c32.939,0,59.733-26.795,59.733-59.733S126.805,392.492,93.867,392.492z M93.867,494.892c-23.526,0-42.667-19.14-42.667-42.667     c0-23.526,19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667C136.533,475.752,117.393,494.892,93.867,494.892z' data-original='#000000' class='active-path' data-old_color='#1faa81' fill='#1faa81'/><path d='M347.255,330.813c4.25-7.287,3.243-17.195-2.85-27.904l-42.308-73.583c-2.355-4.087-7.578-5.495-11.648-3.14     c-4.087,2.347-5.495,7.561-3.149,11.657l42.291,73.532c3.328,5.854,3.558,9.762,2.918,10.854     c-0.401,0.691-2.654,1.997-8.303,1.997h-64.734l11.034-11.034c3.336-3.336,3.336-8.73,0-12.066c-3.328-3.337-8.73-3.337-12.066,0     l-25.591,25.6c-0.794,0.785-1.417,1.732-1.852,2.773c-0.862,2.082-0.862,4.437,0,6.519c0.435,1.041,1.058,1.988,1.852,2.773     l25.591,25.6c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5c3.336-3.336,3.336-8.73,0-12.066l-11.034-11.034     h64.734C338.227,341.292,344.482,335.592,347.255,330.813z' data-original='#000000' class='active-path' data-old_color='#1faa81' fill='#1faa81'/><path d='M508.459,11.556c-5.308-9.182-17.101-16-34.295-7.586l-62.549,30.123H25.6c-14.114,0-25.6,11.486-25.6,25.6     s11.486,25.6,25.6,25.6h8.892l12.629,290.509c0.205,4.582,3.977,8.158,8.516,8.158c0.137,0,0.256,0,0.384-0.009     c4.71-0.205,8.354-4.19,8.149-8.892L51.576,85.292h315.358c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H25.6     c-4.702,0-8.533-3.831-8.533-8.533c0-4.702,3.831-8.533,8.533-8.533h387.968c1.28,0,2.552-0.29,3.695-0.845l64.35-30.993     c9.071-4.454,11.085-0.922,12.066,0.768c2.022,3.516,2.423,8.781-2.637,11.819l-67.661,34.671     c-0.427,0.154-0.836,0.341-1.186,0.538c-1.348,0.734-2.714,1.109-4.062,1.109h-17.067c-0.845,0-1.604,0.256-2.364,0.478     c-0.205,0.068-0.427,0.051-0.623,0.12c-0.939,0.358-1.775,0.896-2.526,1.544c-0.068,0.068-0.171,0.102-0.239,0.171     c-0.597,0.546-1.033,1.22-1.451,1.92c-0.162,0.265-0.393,0.486-0.521,0.776c-0.265,0.572-0.341,1.212-0.469,1.852     c-0.102,0.444-0.307,0.836-0.333,1.306l-17.075,392.9c0,14.114-11.486,25.6-25.6,25.6H162.133c-4.71,0-8.533,3.823-8.533,8.533     s3.823,8.533,8.533,8.533h187.733c23.526,0,42.667-19.14,42.658-42.3l16.708-384.367h8.9c4.045,0,7.97-0.973,11.605-2.867     c0.29-0.111,0.572-0.23,0.819-0.358l68.753-35.234C511.812,39.366,515.755,24.202,508.459,11.556z' data-original='#000000' class='active-path' data-old_color='#1faa81' fill='#1faa81'/><path d='M289.698,160.863c-4.531-1.263-9.242,1.399-10.505,5.931l-4.258,15.283l-28.57-49.681     c-2.645-4.813-10.778-12.971-24.559-12.971c-14.268,0-22.238,8.328-24.474,12.826l-38.69,67.558     c-2.338,4.096-0.922,9.31,3.166,11.648c1.34,0.768,2.799,1.135,4.233,1.135c2.961,0,5.837-1.545,7.415-4.292l38.784-67.746     c0.247-0.41,2.628-4.062,9.566-4.062c6.801,0,9.421,3.857,9.668,4.258l28.561,49.664l-14.763-3.968     c-4.531-1.212-9.225,1.476-10.453,6.024c-1.22,4.557,1.468,9.242,6.025,10.462l34.62,9.301c0.742,0.196,1.493,0.29,2.227,0.29     c0.196,0,0.384-0.085,0.572-0.102c0.375-0.017,0.717-0.102,1.092-0.171c0.691-0.145,1.357-0.367,1.988-0.666     c0.188-0.094,0.41-0.094,0.589-0.205c0.128-0.068,0.196-0.196,0.316-0.282c0.657-0.418,1.229-0.939,1.749-1.527     c0.188-0.205,0.401-0.358,0.563-0.58c0.58-0.802,1.058-1.698,1.34-2.714l0.009-0.043c0.009-0.017,0.017-0.034,0.017-0.043     l9.702-34.816C296.892,166.837,294.238,162.135,289.698,160.863z' data-original='#000000' class='active-path' data-old_color='#1faa81' fill='#1faa81'/><path d='M96.324,330.625c2.739,4.864,8.977,10.667,23.083,10.667h85.333c4.71,0,8.533-3.823,8.533-8.533     s-3.823-8.533-8.533-8.533h-85.333c-5.615,0-7.834-1.297-8.218-1.988c-0.623-1.101-0.324-4.966,3.226-10.837l32-55.876     l4.386,15.454c1.067,3.755,4.48,6.212,8.201,6.212c0.777,0,1.553-0.111,2.338-0.333c4.531-1.289,7.168-5.999,5.88-10.539     l-9.924-34.961c-0.102-0.358-0.358-0.631-0.503-0.973c-0.282-0.674-0.538-1.348-0.99-1.937c-0.401-0.512-0.956-0.87-1.468-1.289     c-0.35-0.282-0.606-0.649-1.007-0.879c-0.017-0.009-0.034-0.009-0.051-0.017c-0.026-0.009-0.034-0.026-0.051-0.043     c-0.666-0.367-1.408-0.503-2.133-0.683c-0.35-0.085-0.666-0.29-1.015-0.324c-0.418-0.051-0.836,0.077-1.271,0.094     c-0.683,0.026-1.365-0.017-2.022,0.171c-0.017,0.009-0.043,0-0.06,0.009l-34.739,10.01c-4.531,1.297-7.142,6.033-5.845,10.556     c1.314,4.531,6.067,7.159,10.564,5.837l14.515-4.181l-31.514,55.04C93.329,313.294,92.126,323.193,96.324,330.625z' data-original='#000000' class='active-path' data-old_color='#1faa81' fill='#1faa81'/></g></g></g></g> </svg>"
    this.platform.ready().then(() => { 
      this.loadMap(); 
    });
    this.locationValue = "";
    this.locations  = [
      ['Recycle 1', 21.615157,39.1588956, 1],
      ['Recycle 2', 21.6157256,39.1646784, 2],
      ['Recycle 3', 21.624102,39.1619415, 3],
      ['Recycle 4', 21.6224762,39.1556437, 4]
 ];
  }
  
  addLocation(){
    let modal = this.modalCtrl.create("SuccessDialogPage",
                                      {showBackdrop:true,enableBackdropDismiss: true,message:"successDialog.addLocation"},
                                      {cssClass: 'successModalClass'});
                                      modal.onDidDismiss(data => {
                                        this.navCtrl.pop();
                                      });
    modal.present();
  }
 
  goBack(){
		this.navCtrl.pop();
	}

  getAddress(latitude,longitude){
    this.nativeGeocoder.reverseGeocode(latitude, longitude)
      .then((result: GeocoderResult) =>{ 
        
        let address = [
          (result[0].thoroughfare || "") + " " + (result[0].subThoroughfare || ""),
          result[0].locality
        ].join(", ");
        console.log("data_: ", address);
        
        this.address = address;
      // console.log(JSON.parse(JSON.stringify(result)));
        //let newResult = JSON.parse(JSON.stringify(result));
      // this.address ="No. "+ result[0].subThoroughfare + " , " + result[0].thoroughfare + " Street " + result[0].subAdministrativeArea; 
      
      })
      .catch((error: any) => console.log(error));
  }


  loadMap() {
    
    this.map = GoogleMaps.create('map_canvas',{
      'controls':{
        myLocation:true,
        compass:true,
        zoom:true
      }
    });
     
    this.map.one(GoogleMapsEvent.MAP_READY)
              .then(() => {
                console.log('Map is ready!');
                this.geolocation.getCurrentPosition().then(res =>{
                  let pos= {
                    target: new LatLng(res.coords.latitude, res.coords.longitude),
                    zoom: 15,
                    tilt: 0
                };
                this.map.moveCamera(pos);
                for (var i = 0; i < this.locations.length; i++) {
                  console.log(this.locations[i][1] + "  "+this.locations[i][2])
                  this.map.addMarker({
                    title: this.locations[i][0],
                    icon: this.recycle,
                    animation: 'DROP',
                    position: {
                      lat: this.locations[i][1],
                      lng: this.locations[i][2]
                    }
                  });
                }
                
                  
                // this.map.addMarker({
                //   icon: 'orange',
                  
                //   position: {
                //     lat: '21.7522752',
                //     lng: '21.7522752'
                //   }
                // });
                this.getAddress(res.coords.latitude, res.coords.longitude);
                  
                });
                this.map.on(GoogleMapsEvent.MAP_DRAG_START).subscribe(()=>{
                 // this.map.clear();
                  this.address = "";
                })
                this.map.on(GoogleMapsEvent.MAP_DRAG_END).subscribe(()=>{
                  console.log("dragged");
                 let location = this.map.getCameraPosition().target;
                 console.log(location.lat+","+location.lng);
                 this.getAddress(location.lat, location.lng);
                      // this.map.addMarker({
                      //   icon: 'orange',
                        
                      //   position: {
                      //     lat: location.lat,
                      //     lng: location.lng
                      //   }
                      // });
                });
                
              });
  }
}


  



