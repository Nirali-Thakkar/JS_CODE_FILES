class user {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    //you need to definr nre property 
    //other wise constructor is also setting and also getter and setter - there will be erroe 
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const usr = new user("n@gmail.com","abc")
console.log(usr.password)

//getter and setter - on each property we have mrthod of getter and setter by theirs name 
//if you are defining getter ten you need to define the seter 


class user1 {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}nirali`
    }
    set password(value){
        this._password = value
    }
}
const usr1 = new user1("n@gmail.com","abc")
console.log(usr1.password)
console.log(usr1.email)