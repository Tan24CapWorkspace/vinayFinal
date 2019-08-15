import {Injectable} from '@angular/core'
import { USER1 } from '../com.USER1'
import { Observable } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({

    providedIn:'root'
})


export class RegistrationServiceComponent{

    URL:string="http://localhost:5000";

    constructor(private http:HttpClient){}

    addAccount(account:USER1):Observable<any>{

        let data={"headers" : new HttpHeaders({"Content-Type":"application/json"})};

        return this.http.post(URL+"/add",account,data);
    }

}