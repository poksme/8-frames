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
var core_1 = require('@angular/core');
var fighter_1 = require('./fighter');
var FighterDetailComponent = (function () {
    function FighterDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof fighter_1.Fighter !== 'undefined' && fighter_1.Fighter) === 'function' && _a) || Object)
    ], FighterDetailComponent.prototype, "fighter", void 0);
    FighterDetailComponent = __decorate([
        core_1.Component({
            selector: 'fighter-detail',
            templateUrl: './templates/fighter-detail.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FighterDetailComponent);
    return FighterDetailComponent;
    var _a;
}());
exports.FighterDetailComponent = FighterDetailComponent;
//# sourceMappingURL=fighter-detail.component.js.map