import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Fighter } from './fighter.model';
import JSONFighterList = require('./list/json-fighter-list.definition');
import JSONFighterDetail = require('./detail/json-fighter-detail.definition');

@Injectable() export class FighterService {
    private documentId = "1qHH6gZ6_TvY1FGWlMNYjxUOGb9_aX9fsNOptmKks1SA";
    constructor(private http: Http) {
    }

    listFighters() {
        return this.http
                    .get(this.getDocumentUrl())
                    .toPromise()
                    .then(function (response) {
                        var ret: {[key: string]:string} = {};
                        var data : JSONFighterList = response.json();
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            var fighterName = data.feed.entry[i].title.$t;
                            var sheetId =  data.feed.entry[i].id.$t.split('/');
                            ret[fighterName] = sheetId[sheetId.length - 1];
                        }
                        return ret;
                    })
                    .catch(this.handleError);
    }

    getFighter(key) {
        console.log('get fighter:' + key);
        return this.http
                    .get(this.getSheetUrl(key))
                    .toPromise()
                    .then(function (response) {
                        var attacks : {[key: string] : string} = {};
                        var data : JSONFighterDetail = response.json();
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            var attackName = data.feed.entry[i].title.$t;
                            attacks[attackName] = data.feed.entry[i].content.$t;
                        }
                        return new Fighter(data.feed.title.$t, attacks);
                    })
                    .catch(this.handleError);;
    }

    private getDocumentUrl() {
        return "https://spreadsheets.google.com/feeds/worksheets/"
                + this.documentId + "/public/basic?alt=json";
    }

    private getSheetUrl(sheetId:string) {
        return "https://spreadsheets.google.com/feeds/list/"
                + this.documentId + "/"
                + sheetId + "/public/basic?alt=json";
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}