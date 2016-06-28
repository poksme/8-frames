// AppComponent Class definition

import { Component, OnInit } from '@angular/core'; // Import the @Component decorator
import { FighterDetailComponent } from './fighter-detail.component'
import { Fighter } from './fighter';
import { FighterService } from './fighter.service';

@Component({
    selector: 'fighters',
    templateUrl:'./templates/fighters.html',
    styleUrls: ['./stylesheets/fighters.css'],
    directives: [FighterDetailComponent]
}) export class FightersComponent implements OnInit {
    title = 'Available Fighters';
    fighters: Fighter[];
    selectedFighter : Fighter;

    constructor(private fighterService: FighterService) {
    }

    initFighters() {
        this.fighterService.listFighters().then(function (fighters) {
            this.fighters = fighters.fighterList;
        }.bind(this));
    }

    onSelect(fighter: Fighter) {
        this.selectedFighter = fighter;
    }

    ngOnInit() {
        this.initFighters();
    }
}