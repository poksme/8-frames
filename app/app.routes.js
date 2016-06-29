"use strict";
var router_1 = require('@angular/router');
// The component the route will link to
var fighter_list_component_1 = require('./fighter/list/fighter-list.component');
var fighter_detail_component_1 = require('./fighter/detail/fighter-detail.component');
var home_component_1 = require('./home/home.component');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }, {
        path: 'fighters',
        component: fighter_list_component_1.FighterListComponent
    }, {
        path: 'fighter/:id',
        component: fighter_detail_component_1.FighterDetailComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map