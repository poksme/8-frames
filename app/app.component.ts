// AppComponent Class definition

import { Component } from '@angular/core'; // Import the @Component decorator
import { FighterDetailComponent } from './fighter-detail.component'
import { Fighter } from './fighter'

const FIGHTERS: Fighter[] = [
  { id: 11, name: 'Ryu' },
  { id: 12, name: 'Ken' },
  { id: 13, name: 'Chun-Li' },
  { id: 14, name: 'Birdie' },
  { id: 15, name: 'Cammy' },
  { id: 16, name: 'Nash' },
  { id: 17, name: 'Dhalsim' },
  { id: 18, name: 'Vega' },
  { id: 19, name: 'M. Bison' },
  { id: 20, name: 'R. Mika' }
];


@Component({
    selector: 'my-app',
    templateUrl:'./templates/app.html',
    styleUrls: ['./stylesheets/app.css'],
    directives: [FighterDetailComponent]
}) export class AppComponent {
    public fighters = FIGHTERS;
    title = 'Street Fighters';
    selectedFighter : Fighter;

    onSelect(fighter: Fighter) {
        this.selectedFighter = fighter;
    }
}