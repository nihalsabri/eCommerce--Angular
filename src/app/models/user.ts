export interface User {
    fname:string,
    lname?:string,//optional
    email:string,
    password:string
    // database generate id by default id:string
}
