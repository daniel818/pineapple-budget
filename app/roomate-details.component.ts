/**
 * Created by Daniel on 05/09/2016.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {RoomateService} from "./roomate.service";
import { Roomate } from './roomate';
import {ROOMATE} from "./mock-roomates";



@Component({
    selector: 'roomate-details',
    templateUrl: 'app/roomate-details.component.html',
    styleUrls: ['app/app.component.css']
})


export class RoomateDetailsComponent implements OnInit{
    @Input() roomate : Roomate;

    constructor(
        private roomateService: RoomateService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.roomateService.getRoomate(id)
                .then(roomate => this.roomate = roomate);
        });

    }



     roomates = ROOMATE;


    iPayRoomates: Array[];
    payMeRoomates : Array[];

    getDetails() :void {
        this.iPayRoomates  = this.getIPay();
        this.payMeRoomates = this.getPayMe();
        console.log(this.iPayRoomates);
    }

    getPayMe(): Array[] {

        var a = [];
        var crtRoomate = this.roomate;
        var nameRoomate;
        var keys;

        keys = crtRoomate.payme;

        for (var key in keys) {
            nameRoomate = this.getNameById(key);

            console.log(nameRoomate);

            a.push({
                name: nameRoomate,
                money: crtRoomate.payme[key]
            });
        }
        return a;
    }

    getIPay(): Array[] {

        var a = [];
        var crtRoomate = this.roomate;
        var nameRoomate;
        var keys;

        keys = crtRoomate.ipay;

        for(var key in keys) {
            nameRoomate = this.getNameById(key);
            console.log(nameRoomate);

             a.push({
             name : nameRoomate,
             money : crtRoomate.ipay[key]
             });
        }
        return a ;
    }


    onChangeObj(newObj) {
        this.roomate = newObj;
        console.log(this.roomate);
        // ... do other stuff here ...
    }

    getNameById(id : any) : String {
        return  this.roomates[id-1].name;
    }

    goBack(): void {
        window.history.back();
    }



}