import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ApiState } from '../core/interfaces';

export const apiParams = createAction('[API] api params',
    props<{
        limit: number,
        breed: string
    }>()
);
export const requestedImages = createAction('[API] requested images',
    props<{
        images: Observable<any>
    }>()
);

export const initialState: ApiState = {
    api: 'https://api.thecatapi.com/v1/images/search',
    limit: 10,
    breed: 'aege',
    images: of('')
}

export const apiReducer = createReducer(
    initialState,
    on(apiParams, (state, action) => ({
        ...state,
        limit: action.limit,
        breed: action.breed
    })),
    on(requestedImages, (state, action) => ({
        ...state,
        images: action.images
    })) 
)

export const featureSelector = createFeatureSelector<any>('images');
export const imageSelector = createSelector(
    featureSelector,
    state => state.images
)

