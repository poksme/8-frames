// The Component definition for creating the root component
import { Component }                                        from '@angular/core';

// The routing tools
import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';

// The global service for fetching data
import { FighterService }                                   from './fighter/fighter.service';

@Component({
  selector: 'app-root', // Will search in index.html for the rout DOM element called my-app
  templateUrl:'./templates/app-root.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [FighterService]
}) export class AppComponent {
  title = '8 Frames';
}
