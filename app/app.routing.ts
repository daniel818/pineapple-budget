/**
 * Created by Daniel on 06/09/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayComponent } from './pay.component'
import { RoomateDetailsComponent } from './roomate-details.component'
import {DashboardComponent} from "./dashboard.component";



const appRoutes: Routes = [
    {
        path: 'payment',
        component: PayComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: RoomateDetailsComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routedComponents = [PayComponent];
