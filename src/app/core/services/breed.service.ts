import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { BREEDS_API_KEY } from '../models';

@Injectable({
    providedIn: 'root'
})
export class BreedService implements OnDestroy{
    private _subs: Array<Subscription> = [];

    constructor(private readonly _http: HttpClient) { }

    ngOnDestroy() {
        this._subs.forEach(sub => sub.unsubscribe());
    }

    public getBreeds() {

        return this._http.get(BREEDS_API_KEY) 
    }
}