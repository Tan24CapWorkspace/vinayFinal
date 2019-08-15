export class USER1{

    firstName:string="";
    lastName:string="";
    mobileNo:number=0;
    address:string="";
    emailId:string="";
    password:string="";
    photo:string="";

    constructor(firstName:string,lastName:string,mobileNo:number,address:string,emailId:string,password:string,){
        this.firstName=firstName;
        this.lastName=lastName;
        this.mobileNo=mobileNo;
        this.address=address;
        this.emailId=emailId;
        this.password=password;
    }

}