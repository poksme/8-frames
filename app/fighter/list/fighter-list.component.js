// AppComponent Class definition
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
var core_1 = require('@angular/core'); // Import the @Component decorator
var router_1 = require('@angular/router');
var fighter_detail_component_1 = require('../detail/fighter-detail.component');
var fighter_service_1 = require('../fighter.service');
var FighterListComponent = (function () {
    function FighterListComponent(fighterService, router) {
        this.fighterService = fighterService;
        this.router = router;
        this.title = 'Available Fighters';
    }
    FighterListComponent.prototype.initFighters = function () {
        this.fighterService.listFighters().then(function (fighters) {
            this.fighters = fighters;
        }.bind(this));
    };
    FighterListComponent.prototype.getNameList = function () {
        return Object.keys(this.fighters);
    };
    FighterListComponent.prototype.onSelect = function (slug) {
        this.router.navigate(['/fighter', slug]);
    };
    FighterListComponent.prototype.ngOnInit = function () {
        this.initFighters();
    };
    FighterListComponent = __decorate([
        core_1.Component({
            selector: 'fighters',
            templateUrl: './templates/fighters.html',
            styleUrls: ['./stylesheets/fighters.css'],
            directives: [fighter_detail_component_1.FighterDetailComponent]
        }), 
        __metadata('design:paramtypes', [fighter_service_1.FighterService, router_1.Router])
    ], FighterListComponent);
    return FighterListComponent;
}());
exports.FighterListComponent = FighterListComponent;
//# sourceMappingURL=fighter-list.component.js.map