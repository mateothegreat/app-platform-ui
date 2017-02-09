import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { List }                             from 'immutable';
import { Subject }                          from "rxjs/Subject";
import { Observer }                         from "rxjs/Observer";
import { Observable }                       from "rxjs/Observable";
import { BehaviorSubject }                  from "rxjs/Rx";
import { PlatformServerSDKConfig }          from './platform-server-sdk.config';
import { PlatformServerSDKService }         from './platform-server-sdk.service';
import { PlatformServerSDKRoutingModule }   from './platform-server-sdk-routing.module';

@NgModule({
    
    imports: [
        
        CommonModule,
        PlatformServerSDKRoutingModule
        
    ],
    
    providers: [ PlatformServerSDKService ]
    
})
export class PlatformServerSDKModule { 
    
    constructor(private _service: PlatformServerSDKService) {
    
        console.log('PlatformServerSDKModule.constructor: ' + _service);    
        
    }
    
}
