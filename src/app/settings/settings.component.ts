import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { IBAccountComponent } from './ibaccount/ibaccount.component';

@Component({
  
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
  
})
export class SettingsComponent implements OnInit {

    constructor(private route: ActivatedRoute, 
                private el: ElementRef) {}

    // constructor(private router: Router, 
    //             private activatedRoute: ActivatedRoute) {
                    
    //     console.log('asdf');
        // router.events.subscribe((val) => {
        //     // see also 
        //     if(val instanceof NavigationEnd) {
                
        //         console.log(val);
                
        //     }
            
        // });
        
//     }
  
    ngOnInit() {
        
        console.log('onInit');
        console.log(this.route.routeConfig);
        console.log(this.el);
        
        // this.sub = this.route.params.subscribe(e => {
        //     console.log(e);
        // console.log(this.route);
            
        // });

    }       
    
    // ngOnDestroy() {
        
    //     console.log('destry');
    //     // this.sub.unsubscribe();

    // }
        
//         this.router.events
//   .filter(event => event instanceof NavigationEnd)
//   .map(route => {
//       console.log(event);
      
//       console.log(route);
      
//   })
      
//     }

}
