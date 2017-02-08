"use strict";
var ibaccount_component_1 = require('./ibaccount/ibaccount.component');
var settings_overview_component_1 = require('./settings-overview/settings-overview.component');
exports.SettingsRoutes = [
    { path: '', component: settings_overview_component_1.SettingsOverviewComponent },
    { path: 'ibaccount', component: ibaccount_component_1.IBAccountComponent }
];
