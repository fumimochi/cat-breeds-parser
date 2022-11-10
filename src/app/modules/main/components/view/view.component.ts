import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { switchMap } from 'rxjs';

import { imageSelector } from "../../../../store/api";

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})  
export class ViewComponent {

    public api$ = this.store.select(imageSelector)
    .pipe(
        switchMap((x) => {
            return x
        })
    )

    constructor(private store: Store) { }
   
}