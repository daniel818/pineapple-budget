/**
 * Created by Daniel on 06/09/2016.
 */
import {Component, OnInit} from '@angular/core';

import { RoomateService } from './roomate.service'
import { Roomate } from './roomate'

import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    roomates: Roomate[] = [];

    constructor(
        private router: Router,
        private roomateService: RoomateService) {
    }


    ngOnInit(): void {
        this.roomateService.getRoomates()
            .then(roomates => this.roomates = roomates);
    }

    gotoDetail(roomate: Roomate): void {

        let link = ['/detail', roomate.id];
        this.router.navigate(link);
    }
}
