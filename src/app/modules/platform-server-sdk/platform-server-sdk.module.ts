import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformServerSdkRoutingModule } from './platform-server-sdk-routing.module';
import { PlatformServerSdkComponent } from './platform-server-sdk.component';

@NgModule({
  imports: [
    CommonModule,
    PlatformServerSdkRoutingModule
  ],
  declarations: [PlatformServerSdkComponent]
})
export class PlatformServerSdkModule { }
