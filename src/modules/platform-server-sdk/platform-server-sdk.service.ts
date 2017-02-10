import { Injectable, Inject }               from '@angular/core';
import { List }                             from 'immutable';
import { Subject }                          from "rxjs/Subject";
import { Observer }                         from "rxjs/Observer";
import { Observable }                       from "rxjs/Observable";
import { BehaviorSubject }                  from "rxjs/Rx";
import { UserApi, User, LoopBackAuth,SDKBrowserModule }                   from './lib/serversdk/index';

@Injectable()
export class PlatformServerSDKService {

    constructor() {
        
        console.log('PlatformServerSDKService.constructor()');
        
        let a = SDKBrowserModule.forRoot();
        console.log(a);
        
    }
    // constructor( private _userService: UserApi) {
        
    //     console.log(_userService);
        
    //     this.login();
        
    // }
    
    // login(): void {
        
    //     console.log('PlatformServerSDKService._userService.login(..)');
        
    //     this._userService.login({ email: 'admin@default.com', password: 'default' }).subscribe((user: User) => {
        
    //         console.log(user);
            
    //     });
        
    // }
    
}
