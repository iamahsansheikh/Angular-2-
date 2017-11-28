
import { Component } from "@angular/core"


//Component Decorator 
@Component({
    selector: 'my-app',
    template: `
                <div style="padding:5px">
                    <ul class="nav nav-tabs">
                        <li routerLinkActive="active"><a routerLink="home">Home </a></li>
                        <li routerLinkActive="active"><a routerLink="employees">Employees </a></li>
                    </ul>
                <router-outlet></router-outlet>
                </div>
      
                 `
})


//Root component is called App Component
export class AppComponent {
    name: string = 'Ahsan';

}
