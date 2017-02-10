import { CommonModule }                     from '@angular/common';
import { NgModule, ModuleWithProviders }    from '@angular/core';
import { List }                             from 'immutable';
import { Subject }                          from "rxjs/Subject";
import { Observer }                         from "rxjs/Observer";
import { Observable }                       from "rxjs/Observable";
import { BehaviorSubject }                  from "rxjs/Rx";
import { SDKBrowserModule, AccessToken }    from './lib/serversdk/index';
import { PlatformServerSDKConfig }          from './platform-server-sdk.config';
import { PlatformServerSDKService }         from './platform-server-sdk.service';
// import { PlatformServerSDKRoutingModule }   from './platform-server-sdk-routing.module';

@NgModule({})
export class PlatformServerSDKModule { 
    
    public constructor(private _sdk: PlatformServerSDKService) {
        
    }

    
    static forRoot(): ModuleWithProviders {

        return {
            
            ngModule  : PlatformServerSDKModule,
            
            providers : [
                
                PlatformServerSDKService,
                SDKBrowserModule
                // LoopBackAuth,
                // LoggerService,
                // JSONSearchParams,
                // SDKModels,
                // UserApi,
                // OrganizationApi,
                // ContactApi,
                // AddressApi,
                // internalStorageProvider,
                
                // { provide: SDKStorage, useClass: StorageBrowser }
                
            ]
            
        };
        
    }
    
}
