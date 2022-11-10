import { ActionReducerMap, MetaReducer } from "@ngrx/store"

import { environment } from './../../environments/environment';
import { apiReducer } from './api';
import { ApiState } from "../core/interfaces";

export interface State {
    limit: ApiState,
    breed: ApiState,
    images: ApiState
}

export const reducers: ActionReducerMap<State> = {
    limit: apiReducer,
    breed: apiReducer,
    images: apiReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? []
    : []