
class teacher extends user{
    constructor(username,id,password){
        super(username)
        this.id = id
        this.password =password
    }
    addcouse(){
        console.log(`added new cousre by ${this.username}`)
    }
}
const chai = new teacher("niraali",57,123)
chai.addcouse()
chai.print()
console.log(chai instanceof teacher) //true
console.log(chai instanceof user) //true