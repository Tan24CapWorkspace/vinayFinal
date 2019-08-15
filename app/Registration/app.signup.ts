import {Component} from '@angular/core'
import { RegistrationServiceComponent } from '../RegistrationService/com.registrationservice';
import { USER1 } from '../com.USER1';

@Component({

    selector:'sign-up',
    templateUrl:'app.SignUp.html'
})

export class SignUpComponent{

    firstName:string="";
    lastName:string="";
    mobileNo:number;
    address:string="";
    emailId:string="";
    password:string="";
    confirmPass:string="";
    category:string="";

    constructor(private service:RegistrationServiceComponent){}

    checkPass(){
        
        //console.log(this.password+"  "+this.confirmPass)
        //this.password.localeCompare(this.confirmPass)
        console.log(this.emailId)
        if(this.password==this.confirmPass)
            this.addAccount();
        else{
            this.password="";
            this.confirmPass="";
            alert("Password Does Not Match. Please Re-Enter them");
        }
        }
    
    
    addAccount():any{

        this.service.addAccount(new USER1(this.firstName,this.lastName,this.mobileNo,
            this.address,this.emailId,this.confirmPass))
        
    }


}