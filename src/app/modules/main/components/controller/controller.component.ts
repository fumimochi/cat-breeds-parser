import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { BreedService } from "../../../../core/services/breed.service";
import { apiParams } from "../../../../store/api";

@Component({
    selector: 'app-controller',
    templateUrl: './controller.component.html',
    styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
    public controllerForm: FormGroup;
    public disabled = true;
    public breeds: Observable<any>;

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _breedService: BreedService,
        private readonly store: Store
    ) {}

    ngOnInit() {
        this.controllerForm = this._formBuilder.group({
            imageAmount: ['10'],
            breed: [null]
        })

        this.breeds = this._breedService.getBreeds();
    }

    public onSelectBreed() {
        this.disabled = false;
    }

    public submit() {
        this.store.dispatch(apiParams({
            limit: +this.controllerForm.value['imageAmount'], 
            breed: this.controllerForm.value['breed'],
        }
        ));
    }
}