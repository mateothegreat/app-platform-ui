"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var ng_semantic_1 = require("ng-semantic/ng-semantic");
var app_component_1 = require('./app.component');
var menu_component_1 = require('./menu/menu.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var settings_component_1 = require('./settings/settings.component');
var desktop_component_1 = require('./desktop/desktop.component');
var stats_component_1 = require('./dashboard/stats/stats.component');
var user_component_1 = require('./user/user.component');
var session_component_1 = require('./user/session/session.component');
var ibaccount_component_1 = require('./settings/ibaccount/ibaccount.component');
var app_routes_1 = require('./app.routes');
var settings_overview_component_1 = require('./settings/settings-overview/settings-overview.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dashboard_component_1.DashboardComponent,
                settings_component_1.SettingsComponent,
                desktop_component_1.DesktopComponent,
                stats_component_1.StatsComponent,
                user_component_1.UserComponent,
                session_component_1.SessionComponent,
                ibaccount_component_1.IBAccountComponent,
                settings_overview_component_1.SettingsOverviewComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(app_routes_1.routes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng_semantic_1.NgSemanticModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
