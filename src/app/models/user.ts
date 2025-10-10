export interface User {
    fname:string,
    lname?:string,//optional
    email:string,
    password:string,
    address:string

    // database generate id by default id:string
}
