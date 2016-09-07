"use strict";
var router_1 = require('@angular/router');
var pay_component_1 = require('./pay.component');
var roomate_details_component_1 = require('./roomate-details.component');
var dashboard_component_1 = require("./dashboard.component");
var appRoutes = [
    {
        path: 'payment',
        component: pay_component_1.PayComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: roomate_details_component_1.RoomateDetailsComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [pay_component_1.PayComponent];
//# sourceMappingURL=app.routing.js.map