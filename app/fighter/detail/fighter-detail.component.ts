import { Component, Input } from '@angular/core';
import { Fighter } from '../fighter.model'

@Component({
    selector:'fighter-detail',
    templateUrl:'./templates/fighter-detail.html'
}) export class FighterDetailComponent {
    @Input()
    fighter: Fighter;
}