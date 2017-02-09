import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { List }                             from 'immutable';
import { Subject }                          from "rxjs/Subject";
import { Observer }                         from "rxjs/Observer";
import { Observable }                       from "rxjs/Observable";
import { BehaviorSubject }                  from "rxjs/Rx";
import { SDKBrowserModule }                 from './lib/serversdk/index';
import { PlatformServerSDKConfig }          from './platform-server-sdk.config';
import { PlatformServerSDKService }         from './platform-server-sdk.service';
import { PlatformServerSDKRoutingModule }   from './platform-server-sdk-routing.module';

@NgModule({
    
    imports: [
        
        CommonModule,
        // SDKModule.forRoot(),
        // PlatformServerSDKRoutingModule
        
    ],
    
    // providers: [ UserApi ]
    
})
export class PlatformServerSDKModule extends SDKBrowserModule { 
    
    // constructor(private _service: PlatformServerSDKService) {
    constructor() {
        
        super();
        
        console.log('PlatformServerSDKModule.constructor()');    
    //     // console.log(u);
        
    }
    
}
