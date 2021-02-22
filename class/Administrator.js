const {readDb, insertDb} = require ('../functions/Functions')
const People = require('./People')

class Administrator extends People{
    constructor(company, name, email, password){
        super(company, name, email, password)
    }

    registerEmployee(){
        let getDb = readDb()
        let companiesList = getDb.companies
        let foundIndex = companiesList.findIndex(companyName => companyName.name === this.company)
        let employeeList = companiesList[foundIndex].employees
        let newEmployee = {
            "name": this.name,
            "email": this.email,
            "password": this.password,
            "attendanceInfo": []
        }
        employeeList.push(newEmployee)
        insertDb({
            companies: companiesList
        })
    }

    removeEmployee(){
        let getDb = readDb()
        let companiesList = getDb.companies
        console.log(this.email)
        let foundIndex = companiesList.findIndex(companyName => companyName.name === this.company)
        let employeeList = companiesList[foundIndex].employees
        let employeeToRemove = employeeList.findIndex(employeeName => employeeName.email === this.email)
        employeeList.splice(employeeToRemove,1)
        insertDb({
            companies: companiesList
        })
        console.log('Funcionario removido!')

    }
}

module.exports = Administrator