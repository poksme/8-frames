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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "Introduction";
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>{{title}}</h2>\n    <p>This is a work in progress Angular 2 application designed to display Street Fighter V frame data.</p>\n    <p>The data is fetched from <a href=\"https://docs.google.com/spreadsheets/d/1qHH6gZ6_TvY1FGWlMNYjxUOGb9_aX9fsNOptmKks1SA/edit?usp=sharing\">this google doc</a> which is a copy of <a href=\"https://docs.google.com/spreadsheets/d/1976rt8B91PqVCeYJAmcnW1uwVJ0H03QJtV-dJC5ohL8/htmlview?sle=true#\">this original google doc</a>.<br>Design, content and pretty much everything is subject to change.</p>\n    <p class=\"info\">This project is developed for educational purpose, it is free and open. Check the repository, fork it, play with it.</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map