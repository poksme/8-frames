"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// The Component definition for creating the root component
var core_1 = require('@angular/core');
// The routing tools
var router_1 = require('@angular/router');
// The global service for fetching data
var fighter_service_1 = require('./fighter/fighter.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = '8 Frames';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './templates/app-root.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [fighter_service_1.FighterService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map