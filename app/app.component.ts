// AppComponent Class definition

import { Component } from '@angular/core'; // Import the @Component decorator

export class Fighter {
    id: number;
    name: string;
}

@Component({ // Decorator
   selector: 'my-app', // CSS Selector where instance of AppComponent will be created
   template: `
<h1>{{title}}</h1>
<h2>{{fighter.name}} details!</h2>
<div>
    <label>id: </label>{{fighter.id}}
</div>
<div>
    <label>name: </label>
    <input [(ngModel)]="fighter.name" placeholder="name">
</div>
  ` // What HTML template to render
})

//  @Component     |   This invoked decorator 
//  applies to     |        applies to
// AppComponent   \_/       this class

export class AppComponent {
    title = 'Street Fighters';
    fighter : Fighter = {
        id: 1,
        name: 'Ryu'
    }
 } // Control appearance and behaviour of the component