const { validateString, readDb, insertDb} = require ('../functions/Functions')

class Company {
    
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

    register(){
        const newCompany = {
            "name": this.company,
            "adminUser":{
                "name": this.name,
                "email": this.email,
                "password": this.password
            },
            employees:[]
        }
        const getDb = readDb()
        let companiesList = getDb.companies
        companiesList.push(newCompany)
        insertDb({
            companies: companiesList
        })
    }
}

module.exports = Company