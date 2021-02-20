const Company = require('./Company')
const {readDb, insertDb, verifyIfCompanyExists} = require ('../functions/Functions')

class Employee extends Company {
    constructor(company, name, email, password, attendanceInfo) {
        super(company, name, email, password)
        this._attendanceInfo = attendanceInfo || []
    }

    get attendanceInfo () {return this._attendanceInfo}
    set attendanceInfo (inOut) {
        validarString(inOut)
        this._attendanceInfo = inOut   
    }

    register(){
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

    checkIn(){
        let getDb = readDb()
        let companiesList = getDb.companies
        let foundIndex = companiesList.findIndex(companyName => companyName.name === this.company)
        let employeeList = companiesList[foundIndex].employees
        let employeeCheckin = employeeList.find(filterName => filterName.name === this.name)
        const StartDate = new Date();
        StartDate.toDateString('pt-BR'); //tem que mudar
        let dia = StartDate.getUTCDate();
        let mes = (StartDate.getUTCMonth() + 1);
        let ano = StartDate.getUTCFullYear();
        let starthours = new Date().toLocaleTimeString('pt-BR');
        let hours = JSON.parse(starthours[0].concat(starthours[1]));
        const pushIn = `Entrada: {${dia}/${mes}/${ano}, ${starthours}}`
        employeeCheckin.attendanceInfo.push(pushIn)
        insertDb({
            companies: companiesList
        })
    }

    checkOut(){
        let getDb = readDb()
        let companiesList = getDb.companies
        let foundIndex = companiesList.findIndex(companyName => companyName.name === this.company)
        let employeeList = companiesList[foundIndex].employees
        let employeeCheckin = employeeList.find(filterName => filterName.name === this.name)
        const FinishedDate = new Date();
        FinishedDate.toDateString('pt-BR'); //tem que mudar
        let dia = FinishedDate.getUTCDate();
        let mes = (FinishedDate.getUTCMonth() + 1);
        let ano = FinishedDate.getUTCFullYear();
        let FinishedHours = new Date().toLocaleTimeString('pt-BR');
        let hours = JSON.parse(FinishedHours[0].concat(FinishedHours[1]));
        const pushOut = `Saida: {${dia}/${mes}/${ano}, ${FinishedHours}}`
        employeeCheckin.attendanceInfo.push(pushOut)
        insertDb({
            companies: companiesList
        })
    }
}

module.exports = Employee