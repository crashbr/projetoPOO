const validarString = require('../functions/functions')

class Company {
    
    constructor(company, name, email, password){
        this._company = company,
        this._name = name,
        this._email = email,
        this._password = password
         }
         
    get company () {return this.company}
    set company (newCompany) {
        validarString(newCompany)
        this._company = newCompany   
    }
    
    get name() {return this.name}
    set name (newName) {
        validarString(newName)
        this._name = newName   
    }
    
    get email () {return this.email}
    set email (newEmail) {
        validarString(newEmail)
        this._email = newEmail   
    }
    
    get password () {return this.password}
    set password (newPassword) {
        this._password = newPassword   
    }

/*     criarEmpresa(company, name, email, password){
        this.company = company,
        this.name = name,
        this.email = email,
        this.password = password
    } */
}

module.exports = Company