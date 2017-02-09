import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { List }                             from 'immutable';
import { Subject }                          from "rxjs/Subject";
import { Observer }                         from "rxjs/Observer";
import { Observable }                       from "rxjs/Observable";
import { BehaviorSubject }                  from "rxjs/Rx";
import { PlatformServerSDKConfig }          from './platform-server-sdk-routing.config';
import { PlatformServerSDKService }         from './platform-server-sdk-routing.service';
import { PlatformServerSDKRoutingModule }   from './platform-server-sdk-routing.module';

@NgModule({
    
    imports: [
        
        CommonModule,
        PlatformServerSDKRoutingModule
        
    ]
    
})
export class PlatformServerSDKModule { 
    
    constructor(private _service: PlatformServerSDKService): void {
    
        console.log('PlatformServerSDKModule.constructor: ' + _service);    
        
    }
    
}
