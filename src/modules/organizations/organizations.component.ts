import { Component, OnInit }                    from '@angular/core';
import { PlatformServerSDKService }             from '../platform-server-sdk';

@Component({
    
    selector:       'app-organizations',
    templateUrl:    './organizations.component.html',
    
    providers:      [ PlatformServerSDKService ]
    
})
export class OrganizationsComponent implements OnInit {
    
    datasource:Array<any> = [];
    
    constructor(private _platformService: PlatformServerSDKService) { 
        
        console.log('OrganizationsComponent.constructor: ' + _platformService);

    }
    
    ngOnInit() {
    
        
        
    }

}
