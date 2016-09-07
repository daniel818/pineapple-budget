import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';


import { AppComponent }         from './app.component';
import {PayComponent} from "./pay.component";
import {RoomateDetailsComponent} from "./roomate-details.component";
import {DashboardComponent} from "./dashboard.component";
import {RoomateService} from "./roomate.service";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
        //HttpModule,
    ],
    declarations: [
        AppComponent,
        PayComponent,
        RoomateDetailsComponent,
        DashboardComponent
    ],
    providers: [RoomateService],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
