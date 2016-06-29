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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var fighter_1 = require('./fighter');
var FighterService = (function () {
    function FighterService(http) {
        this.http = http;
        this.documentId = "1qHH6gZ6_TvY1FGWlMNYjxUOGb9_aX9fsNOptmKks1SA";
    }
    FighterService.prototype.listFighters = function () {
        return this.http
            .get(this.getDocumentUrl())
            .toPromise()
            .then(function (response) {
            var fighterList = [];
            var sheetLinks = {};
            var data = response.json();
            for (var i = 0; i < data.feed.entry.length; i++) {
                var fighterName = data.feed.entry[i].title.$t;
                var sheetId = data.feed.entry[i].id.$t.split('/');
                fighterList.push(new fighter_1.Fighter(i + 1, fighterName));
                sheetLinks[fighterName] = sheetId[sheetId.length - 1];
            }
            return { fighterList: fighterList, fighterSheetLinks: sheetLinks };
        })
            .catch(this.handleError);
    };
    FighterService.prototype.getFighter = function (key) {
        return null;
    };
    FighterService.prototype.getDocumentUrl = function () {
        return "https://spreadsheets.google.com/feeds/worksheets/"
            + this.documentId + "/public/basic?alt=json";
    };
    FighterService.prototype.getSheetUrl = function (sheetId) {
        return "https://spreadsheets.google.com/feeds/list/"
            + this.documentId + "/"
            + sheetId + "/public/basic?alt=json";
    };
    FighterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    FighterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FighterService);
    return FighterService;
}());
exports.FighterService = FighterService;
//# sourceMappingURL=fighter.service.js.map