// AppComponent Class definition

import { Component, OnInit } from '@angular/core'; // Import the @Component decorator
import { FighterDetailComponent } from './fighter-detail.component'
import { Fighter } from './fighter';
import { FighterService } from './fighter.service';

@Component({
    selector: 'my-app',
    templateUrl:'./templates/app.html',
    styleUrls: ['./stylesheets/app.css'],
    directives: [FighterDetailComponent],
    providers: [FighterService]
}) export class AppComponent implements OnInit {
    title = 'Street Fighters';
    fighters: Fighter[];
    selectedFighter : Fighter;

    constructor(private fighterService: FighterService) {
    }

    initFighters() {
        this.fighterService.fetchFighters().then(function (fighters) {
             this.fighters = fighters
        }.bind(this));
    }

    onSelect(fighter: Fighter) {
        this.selectedFighter = fighter;
    }

    ngOnInit() {
        this.initFighters();
    }
}