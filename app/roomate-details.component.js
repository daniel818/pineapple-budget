/**
 * Created by Daniel on 05/09/2016.
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
var roomate_service_1 = require("./roomate.service");
var roomate_1 = require('./roomate');
var mock_roomates_1 = require("./mock-roomates");
var RoomateDetailsComponent = (function () {
    function RoomateDetailsComponent(roomateService, route) {
        this.roomateService = roomateService;
        this.route = route;
        this.roomates = mock_roomates_1.ROOMATE;
    }
    RoomateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.roomateService.getRoomate(id)
                .then(function (roomate) { return _this.roomate = roomate; });
        });
    };
    RoomateDetailsComponent.prototype.getDetails = function () {
        this.iPayRoomates = this.getIPay();
        this.payMeRoomates = this.getPayMe();
        console.log(this.iPayRoomates);
    };
    RoomateDetailsComponent.prototype.getPayMe = function () {
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
    };
    RoomateDetailsComponent.prototype.getIPay = function () {
        var a = [];
        var crtRoomate = this.roomate;
        var nameRoomate;
        var keys;
        keys = crtRoomate.ipay;
        for (var key in keys) {
            nameRoomate = this.getNameById(key);
            console.log(nameRoomate);
            a.push({
                name: nameRoomate,
                money: crtRoomate.ipay[key]
            });
        }
        return a;
    };
    RoomateDetailsComponent.prototype.onChangeObj = function (newObj) {
        this.roomate = newObj;
        console.log(this.roomate);
        // ... do other stuff here ...
    };
    RoomateDetailsComponent.prototype.getNameById = function (id) {
        return this.roomates[id - 1].name;
    };
    RoomateDetailsComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', roomate_1.Roomate)
    ], RoomateDetailsComponent.prototype, "roomate", void 0);
    RoomateDetailsComponent = __decorate([
        core_1.Component({
            selector: 'roomate-details',
            templateUrl: 'app/roomate-details.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [roomate_service_1.RoomateService, router_1.ActivatedRoute])
    ], RoomateDetailsComponent);
    return RoomateDetailsComponent;
}());
exports.RoomateDetailsComponent = RoomateDetailsComponent;
//# sourceMappingURL=roomate-details.component.js.map