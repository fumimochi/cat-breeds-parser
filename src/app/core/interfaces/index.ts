import { Observable } from 'rxjs';

export interface ApiState {
    api: string;
    limit?: number;
    breed?: string;
    images?: Observable<any>; 
}