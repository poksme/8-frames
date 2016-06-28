import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fighter } from '../fighter.model'
import { FighterService } from '../fighter.service';

@Component({
    selector:'fighter-detail',
    templateUrl:'./templates/fighter-detail.html',
    styleUrls: ['./stylesheets/fighters.css']// Change later
}) export class FighterDetailComponent implements OnInit {
  fighter: Fighter;
  sub;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fighterService: FighterService
    ) {

    }

    getAttackList() {
        return Object.keys(this.fighter.attacks);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params['id']);
            this.fighterService.getFighter(params['id']).then(function (fighter: Fighter) {
                console.log(fighter)
                this.fighter = fighter;
            }.bind(this));
        }.bind(this));
    }
}