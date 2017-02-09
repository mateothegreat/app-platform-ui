import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { PlatformServerSDKConfig }          from './platform-server-sdk-routing.config';
import { PlatformServerSDKRoutingModule }   from './platform-server-sdk-routing.module';

@NgModule({
    
    imports: [
        
        CommonModule,
        PlatformServerSDKRoutingModule
        
    ]
    
})
export class PlatformServerSdkModule { }
