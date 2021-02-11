const Company = require('./Company')
const validarString = require('../functions/functions')

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
        console.log("Registra novo funcionario")
    }

    checkIn(){
        console.log("registraEntrada")
    }

    checkOut(){
        console.log("registraSaida")
    }
}

module.exports = Employee