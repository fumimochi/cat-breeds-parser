import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

import { MY_API_KEY } from './core/models/index';
import { apiParams, initialState, requestedImages } from "./store/api";

@Injectable()
export class AppEffects {


    api$ = createEffect(() => this.actions$.pipe(
        ofType(apiParams),
        map((x) => requestedImages({images: this._http.get(`${initialState.api}?limit=${x.limit}&breed_ids=${x.breed}&api_key=${MY_API_KEY}`)
    }))
        
    ))

    constructor(
        private actions$: Actions,
        private _http: HttpClient,
    ) {}

}