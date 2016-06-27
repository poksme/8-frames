import { Injectable } from '@angular/core';
import { FIGHTERS } from './mock-fighters';
import { Fighter } from './fighter';

@Injectable() export class FighterService {
    fetchFighters() {
        // SLOWLY
        return new Promise<Fighter[]>(function (resolve) {
            setTimeout(function () {
                resolve(FIGHTERS);
            }, 2000);
        });

        // IMMEDIATELY
        // return Promise.resolve(FIGHTERS);
    }
}