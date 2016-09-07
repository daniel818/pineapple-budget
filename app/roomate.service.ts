/**
 * Created by Daniel on 06/09/2016.
 */
import { Injectable } from '@angular/core';

import { Roomate } from './roomate';
import { ROOMATE } from './mock-roomates';

@Injectable()
export class RoomateService {

    getRoomates(): Promise<Roomate[]> {
        return Promise.resolve(ROOMATE);
    }

    getRoomate(id: number): Promise<Roomate> {
        return this.getRoomates()
            .then(roomates => roomates.find(roomate => roomate.id === id));
    }

}
