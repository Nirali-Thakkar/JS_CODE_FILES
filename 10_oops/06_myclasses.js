class user {
    constructor(name,id,password){
        this.name = name
        this.id = id
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    changeuserName(){
        return `${this.name.toUpperCase()}`
    }
}
const nik = new user("nirali",57,1234)
console.log(nik )
console.log(nik.encryptPassword())
console.log(nik.changeuserName())


// behind the scene - without using class by doing function 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());