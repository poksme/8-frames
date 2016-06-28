import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Fighter } from './fighter';
import FighterList = require('./fighter-list.definition');

@Injectable() export class FighterService {
    private fightersUrl = "https://spreadsheets.google.com/feeds/worksheets/1qHH6gZ6_TvY1FGWlMNYjxUOGb9_aX9fsNOptmKks1SA/public/basic?alt=json";

    constructor(private http: Http) {

    }

    listFighters() {
        return this.http
                    .get(this.fightersUrl)
                    .toPromise()
                    .then(function (response) {
                        var fighterList: Fighter[] = [];
                        var data : FighterList = response.json();
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            fighterList.push(new Fighter(i + 1, data.feed.entry[i].title.$t));
                        }
                        return fighterList;
                    })
                    .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}