import { Injectable, Inject } from '@angular/core';
import { List } from 'immutable';
import { Subject } from "rxjs/Subject";
import { Observer } from "rxjs/Observer";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/Rx";
import { UserApi, User, LoopBackAuth, SDKBrowserModule, AccessToken } from './lib/serversdk/index';

@Injectable()
export class PlatformServerSDKService {
   userAPI: UserApi;

  constructor(private _sdk: SDKBrowserModule, userAPI: UserApi) {
    this.userAPI = userAPI;
    console.log('PlatformServerSDKService.constructor()');

    let a = SDKBrowserModule.forRoot();

    console.log(a);
    console.log(this.userAPI);

    // this.login();

  }

  public login(): void {

    // this.userAPI.login({ email: 'admin@default.com', password: 'default' }).subscribe((token: AccessToken) => {

    //     console.log(token);

    // });

  }
  sessionCheck() {



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
