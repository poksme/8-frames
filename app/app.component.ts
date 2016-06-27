import { Component } from '@angular/core';
import { FighterService } from './fighter.service';
import { FightersComponent } from './fighters.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <fighters></fighters>
  `,
  directives: [FightersComponent],
  providers: [
    FighterService
  ]
}) export class AppComponent {
  title = 'Street Fighters App';
}
