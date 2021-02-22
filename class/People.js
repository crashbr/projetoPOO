class People {
    constructor(company, name, email, password){
        this._company = company,
        this._name = name,
        this._email = email,
        this._password = password
    }

    get company () {return this._company}
    set company (newCompany) {
        this._company = newCompany   
    }

    get name() {return this._name}
    set name (newName) {
        this._name = newName   
    }
    
    get email () {return this._email}
    set email (newEmail) {
        this._email = newEmail   
    }
    
    get password () {return this._password}
    set password (newPassword) {
        this._password = newPassword   
    }
}

module.exports = People