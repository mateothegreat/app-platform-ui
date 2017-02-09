import { Injectable, Inject }               from 'angular2/core';
import { List }                             from 'immutable';
import { Subject }                          from "rxjs/Subject";
import { Observer }                         from "rxjs/Observer";
import { Observable }                       from "rxjs/Observable";
import { BehaviorSubject }                  from "rxjs/Rx";
import { LoopBackConfig }                   from './lib/serversdk';

@Injectable()
export class PlatformServerSDKService {

    constructor(): void {
        
        console.log('PlatformServerSDKService.constructor()');
        
    }
    
}
