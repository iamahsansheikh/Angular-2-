import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences.service';

@Component({
    template: `<h1>This is Home page </h1>
            <div>
                Color Preference: 
                <input type='text' [(ngModel)]='color' [style.background]='color' />
                </div>

                `
})

export class HomeComponent {


    constructor(private _userPreferenceService: UserPreferencesService) {
    }

    get color(): string {
        return this._userPreferenceService.colourPreference;
    }

    set color(value: string) {
        this._userPreferenceService.colourPreference = value;
    }

}