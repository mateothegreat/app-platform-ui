"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng_semantic_1 = require('ng-semantic/ng-semantic');
var IBAccountComponent = (function () {
    function IBAccountComponent() {
    }
    IBAccountComponent.prototype.showModal = function () {
        console.log(this.m);
        this.m.show({});
    };
    __decorate([
        core_1.ViewChild(ng_semantic_1.SemanticModalComponent)
    ], IBAccountComponent.prototype, "m");
    IBAccountComponent = __decorate([
        core_1.Component({
            selector: 'app-ibaccount',
            templateUrl: './ibaccount.component.html',
            styleUrls: ['./ibaccount.component.css']
        })
    ], IBAccountComponent);
    return IBAccountComponent;
}());
exports.IBAccountComponent = IBAccountComponent;
