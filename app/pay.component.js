/**
 * Created by Daniel on 04/09/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var roomate_service_1 = require('./roomate.service');
var PayComponent = (function () {
    function PayComponent(router, roomateService) {
        this.router = router;
        this.roomateService = roomateService;
        this.money = 0;
    }
    //Transfer Monry
    PayComponent.prototype.calc = function (roomate1, roomate2, value) {
        console.log(!roomate1[roomate2.id]);
        /*
                if (!roomate1[roomate2.id]){
                    roomate1.ipay[roomate2.id] =  0;
        
                }
        */
        roomate1.ipay[roomate2.id] += Math.round(value);
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
        console.log("roomte 2:" + this.roomates[2].payme);
        console.log("roomte 1:" + this.roomates[1].ipay);
        console.log(value);
    };
    // Select Roomate 1
    PayComponent.prototype.onChangeObj1 = function (newObj) {
        this.crtRoomate1 = newObj;
        // ... do other stuff here ...
    };
    //Select Roomate2
    PayComponent.prototype.onChangeObj2 = function (newObj) {
        this.crtRoomate2 = newObj;
        // ... do other stuff here ...
    };
    PayComponent.prototype.getRoomates = function () {
        var _this = this;
        this.roomateService.getRoomates().then(function (roomates) { return _this.roomates = roomates; });
    };
    PayComponent.prototype.ngOnInit = function () {
        this.getRoomates();
    };
    PayComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.crtRoomate1.id]);
    };
    PayComponent = __decorate([
        core_1.Component({
            selector: 'pay-display',
            templateUrl: 'app/pay.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, roomate_service_1.RoomateService])
    ], PayComponent);
    return PayComponent;
}());
exports.PayComponent = PayComponent;
//# sourceMappingURL=pay.component.js.map