import { Component }                                        from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FighterService }                                   from './fighter.service';
import { FightersComponent }                                from './fighters.component';
import { HomeComponent }                                    from './home.component';

@Component({
  selector: 'my-app',
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
    component: FightersComponent
  }, {
    name: 'Home',
    path: '/',
    useAsDefault: true,
    component: HomeComponent 
  }
]) export class AppComponent {
  title = '8 Frames';
}
