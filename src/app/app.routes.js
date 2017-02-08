"use strict";
var dashboard_component_1 = require('./dashboard/dashboard.component');
var settings_component_1 = require('./settings/settings.component');
var desktop_component_1 = require('./desktop/desktop.component');
var settings_routes_1 = require('./settings/settings.routes');
exports.routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent, children: settings_routes_1.SettingsRoutes },
    { path: 'desktop', component: desktop_component_1.DesktopComponent }
];
