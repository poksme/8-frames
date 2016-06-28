import { bootstrap }        from '@angular/platform-browser-dynamic'; // Angular's browser bootstrap
import { HTTP_PROVIDERS }   from '@angular/http'; // For HTTP Requests
import { AppComponent }     from './app.component'; // Our root component

bootstrap(AppComponent, [HTTP_PROVIDERS]); // Bundle our app