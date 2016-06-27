// AppComponent Class definition

import { Component } from '@angular/core'; // Import the @Component decorator

@Component({ // Decorator
   selector: 'my-app', // CSS Selector where instance of AppComponent will be created
   template: '<h1>My first Angular 2 App</h1>' // What HTML template to render
})

//  @Component     |   This invoked decorator 
//  applies to     |        applies to
// AppComponent   \_/       this class

export class AppComponent { } // Control appearance and behaviour of the component