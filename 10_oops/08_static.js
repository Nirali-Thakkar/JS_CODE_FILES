class user{
    constructor(username){
        this.username = username
    }
    print(){
        console.log(`username : ${this.username}`)
    }
    static createID(){
        return `123`
    }
}
const chai = new user("niirali")
//chai.createID() //cannot access this method




class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());//cannot access by child also 