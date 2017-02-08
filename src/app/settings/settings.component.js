"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
var core_1 = require('@angular/core');
var SettingsComponent = (function () {
    function SettingsComponent(route, el) {
        this.route = route;
        this.el = el;
    }
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
    SettingsComponent.prototype.ngOnInit = function () {
        console.log('onInit');
        console.log(this.route.routeConfig);
        console.log(this.el);
        // this.sub = this.route.params.subscribe(e => {
        //     console.log(e);
        // console.log(this.route);
        // });
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
        })
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
