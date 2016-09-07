/**
 * Created by Daniel on 06/09/2016.
 */

import {PayComponent} from "./pay.component";
import {RoomateDetailsComponent} from "./roomate-details.component";

import {Roomate} from "./roomate";

export const ROOMATE: Roomate[] = [
    {
        id : 1,
        name: 'Daniel',
        ipay: {"2": 29, "3": 35, "4": 49},
        payme: {"2": 24, "3": 39, "4": 48}
    },
    {
        id : 2,
        name: 'Ingrid',
        ipay: {"1": 25, "3": 46, "4": 13},
        payme: {"1": 10, "3": 5, "4": 1}
    },
    {
        id : 3,
        name: 'Chris',
        ipay: {"1": 20, "2": 21, "4": 41},
        payme: {"1": 12, "2": 22, "4": 42}
    },
    {
        id : 4,
        name: 'Maren',
        ipay: {"1": 15, "2": 28, "3": 31},
        payme: {"1": 17, "2": 23, "3": 33}
    }
];
