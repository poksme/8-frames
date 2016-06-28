// AppComponent Class definition

import { Component, OnInit } from '@angular/core'; // Import the @Component decorator
import { Router } from '@angular/router';
import { FighterDetailComponent } from '../detail/fighter-detail.component'
import { Fighter } from '../fighter.model';
import { FighterService } from '../fighter.service';

@Component({
    selector: 'fighters',
    templateUrl:'./templates/fighters.html',
    styleUrls: ['./stylesheets/fighters.css'],
    directives: [FighterDetailComponent]
}) export class FighterListComponent implements OnInit {
    title = 'Available Fighters';
    fighters: Fighter[];
    selectedFighter : Fighter;

    constructor(private fighterService: FighterService, private router: Router) {
    }

    initFighters() {
        this.fighterService.listFighters().then(function (fighters) {
            this.fighters = fighters.fighterList;
        }.bind(this));
    }

    onSelect(fighter: Fighter) {
        this.router.navigate(['Fighter Detail', fighter.id]);
        // this.selectedFighter = fighter;
    }

    ngOnInit() {
        this.initFighters();
    }
}