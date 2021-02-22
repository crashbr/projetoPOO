const People = require('./People')
const { readDb, insertDb } = require('../functions/Functions')

class Company extends People {

    constructor(company, name, email, password) {
        super(company, name, email, password)
    }

    register() {
        const newCompany = {
            "name": this.company,
            "adminUser": {
                "name": this.name,
                "email": this.email,
                "password": this.password
            },
            employees: []
        }
        let getDb = readDb()
        let companiesList = getDb.companies
        companiesList.push(newCompany)
        insertDb({
            companies: companiesList
        })
    }
}

module.exports = Company