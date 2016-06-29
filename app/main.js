"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic'); // Angular's browser bootstrap
var http_1 = require('@angular/http'); // For HTTP Requests
var app_component_1 = require('./app.component'); // Our root component
var app_routes_1 = require('./app.routes');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS]); // Bundle our app with global providers
//# sourceMappingURL=main.js.map