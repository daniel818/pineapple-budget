/**
 * Created by Daniel on 04/09/2016.
 */

import { ActivatedRoute, Params } from '@angular/router';

import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';

import { RoomateService } from './roomate.service'
import { Roomate } from './roomate';

import { ROOMATE } from './mock-roomates';
import { RoomateDetailsComponent } from './roomate-details.component'

import {AppComponent} from "./app.component";



@Component({
    selector: 'pay-display',
    templateUrl: 'app/pay.component.html',
    styleUrls: ['app/app.component.css']
})


export class PayComponent implements OnInit{

    constructor(
        private router: Router,
        private roomateService: RoomateService) { }


    roomates: Roomate[];
    crtRoomate1;
    crtRoomate2;
    money = 0;

    //Transfer Monry
    calc(roomate1: Roomate, roomate2: Roomate, value: number): void {

        console.log(!roomate1[roomate2.id]);
/*
        if (!roomate1[roomate2.id]){
            roomate1.ipay[roomate2.id] =  0;

        }
*/
        roomate1.ipay[roomate2.id]  +=   Math.round(value);
/*
        if (!roomate2[roomate1.id]){
            roomate2.payme[roomate1.id] =   0;
        }
*/
        roomate2.payme[roomate1.id] += Math.round(value);

        //Testing
        console.log(roomate1.name);
        console.log(roomate2.name);
        console.log(this.roomates[1]);
        console.log(this.roomates[2]);

        console.log( "roomte 2:" + this.roomates[2].payme);
        console.log( "roomte 1:" + this.roomates[1].ipay);
        console.log(value);
    }
    // Select Roomate 1
    onChangeObj1(newObj) {
        this.crtRoomate1 = newObj;
        // ... do other stuff here ...
    }
    //Select Roomate2
    onChangeObj2(newObj) {
        this.crtRoomate2 = newObj;
        // ... do other stuff here ...
    }


    getRoomates(): void {
        this.roomateService.getRoomates().then(roomates => this.roomates = roomates);
    }
    ngOnInit(): void {
        this.getRoomates();
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.crtRoomate1.id]);
    }

}