import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fighter } from '../fighter.model'
import { FighterService } from '../fighter.service';

@Component({
    selector:'fighter-detail',
    templateUrl:'./templates/fighter-detail.html'
}) export class FighterDetailComponent {
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: FighterService) {}

    @Input()
    fighter: Fighter;
}