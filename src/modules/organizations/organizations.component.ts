import { Component, OnInit }                    from '@angular/core';
import { PlatformServerSDKService }             from './../platform-server-sdk/platform-server-sdk.service';

@Component({
    
    selector:       'app-organizations',
    templateUrl:    './organizations.component.html',
    
    // providers:      [ UserApi ]
    
})
export class OrganizationsComponent implements OnInit {
    
    datasource:Array<any> = [];
    
    // constructor() { 
    constructor(private _ds: PlatformServerSDKService) {
        
        console.log('OrganizationsComponent.constructor: ');
        console.log(_ds);

    }
    
    ngOnInit() {
    
        
        
    }

}
