import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Fighter } from './fighter';
import FighterList = require('./fighter-list.definition');

@Injectable() export class FighterService {
    private documentId = "1qHH6gZ6_TvY1FGWlMNYjxUOGb9_aX9fsNOptmKks1SA";

    constructor(private http: Http) {

    }

    listFighters() {
        return this.http
                    .get(this.getDocumentUrl())
                    .toPromise()
                    .then(function (response) {
                        var fighterList: Fighter[] = [];
                        var sheetLinks: {[key: string]:string} = {};
                        var data : FighterList = response.json();
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            var fighterName = data.feed.entry[i].title.$t;
                            var sheetId =  data.feed.entry[i].id.$t.split('/');
                            fighterList.push(new Fighter(i + 1, fighterName));
                            sheetLinks[fighterName] = sheetId[sheetId.length - 1];
                        }
                        return {fighterList: fighterList, fighterSheetLinks: sheetLinks};
                    })
                    .catch(this.handleError);
    }

    getFighter(key) {
        return null;
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