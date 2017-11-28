import {Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; //for try and catch
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';


//Decorate Service Injectable - use this to inject any dependency in our service class 
//use this even if your service has dependency or not
@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {}

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:52526/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:52526/api/employees/" + empCode)
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }


    handlePromiseError(error: Response) {
        console.error(error);
        throw(error);

    }


    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);

    }
}