// The Component definition for creating the root component
import { Component }                                        from '@angular/core';

// The routing tools
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

// The global service for fetching data
import { FighterService }                                   from './fighter/fighter.service';

// The component the route will link to
import { FighterListComponent }                             from './fighter/list/fighter-list.component';
import { HomeComponent }                                    from './home/home.component';

@Component({
  selector: 'my-app', // Will search in index.html for the rout DOM element called my-app
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Fighters']">Fighters</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    FighterService
  ]
}) @RouteConfig([
  {
    name: 'Fighters',
    path:'/fighters',
    component: FighterListComponent
  }, {
    name: 'Home',
    path: '/',
    useAsDefault: true,
    component: HomeComponent 
  }
]) export class AppComponent {
  title = '8 Frames';
}
