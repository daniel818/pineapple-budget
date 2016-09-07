/**
 * Created by Daniel on 26/08/2016.
 */
import {Component, OnInit} from "@angular/core";
import { RoomateService } from './roomate.service';
import {Roomate} from "./roomate";

@Component({
    selector: 'my-app',

    template:`<h1>{{title}}</h1>
              <nav class="navbar navbar-light bg-faded">
                 <div class="nav navbar-nav">
                    <a class="nav-item nav-link active" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a class="nav-item nav-link" routerLink="/payment" routerLinkActive="active">Payment</a>
                 </div>
              </nav>
              <router-outlet></router-outlet>`,

    styleUrls: ['app/app.component.css']
})

export class AppComponent {

    title = 'Pineapple Budget';

}