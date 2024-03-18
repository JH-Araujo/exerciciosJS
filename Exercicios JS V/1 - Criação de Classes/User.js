class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(this.email === email && this.password === password){
            console.log("Login Realizado!")
        }else{
            console.log(`Falha no Login!`)
        }
    }
}

const john = new User("John Doe", "jhondoe@email.com", "1234")

console.log(john)
john.login("jhondoe@email.com", "1234")