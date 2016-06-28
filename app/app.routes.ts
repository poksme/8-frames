import { provideRouter, RouterConfig }  from '@angular/router';

// The component the route will link to
import { FighterListComponent }                             from './fighter/list/fighter-list.component';
import { FighterDetailComponent }                           from './fighter/detail/fighter-detail.component';
import { HomeComponent }                                    from './home/home.component';


const routes : RouterConfig = [
  {
    path: '',
    component: HomeComponent
  }, {
    path:'fighters',
    component: FighterListComponent
  }, {
    path: 'fighter/:id',
    component: FighterDetailComponent
  }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];