import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import {UserPreferencesService } from './userPreferences.service';


@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
})

export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading Data. Please Wait..';

    


    //dependency injection
    constructor(private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService) {
    }

    get color(): string {
        return this._userPreferencesService.colourPreference;
    }

    set color(value: string) {
        this._userPreferencesService.colourPreference = value;
    }

    //service call
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = 'Problem with Service, Please try Again Later'
            });
    }


    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }


    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Female").length;
    }
   
}