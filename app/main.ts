import { bootstrap }            from '@angular/platform-browser-dynamic'; // Angular's browser bootstrap
import { HTTP_PROVIDERS }       from '@angular/http'; // For HTTP Requests
import { AppComponent }         from './app.component'; // Our root component
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]); // Bundle our app with global providers