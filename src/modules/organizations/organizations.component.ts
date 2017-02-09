import { Component, OnInit }                    from '@angular/core';
import { PlatformServerSDKService }             from '../platform-server-sdk';
import { UserApi } from '../platform-server-sdk/lib/serversdk';

@Component({
    
    selector:       'app-organizations',
    templateUrl:    './organizations.component.html',
    
    // providers:      [ UserApi ]
    
})
export class OrganizationsComponent implements OnInit {
    
    datasource:Array<any> = [];
    
    // constructor(private _platformService: UserApi) { 
    constructor() {
        console.log('OrganizationsComponent.constructor: ');
        // console.log(_platformService);

    }
    
    ngOnInit() {
    
        
        
    }

}
