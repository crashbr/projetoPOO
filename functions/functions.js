const fs = require('fs')


function validateString(value) {
    if (typeof(value) !== 'string' && typeof(value) !== 'undefined') throw `O ${value} precisa ser uma string.`;
    return;
}

function insertDb(data) {
    fs.writeFileSync('./db/db.json', JSON.stringify(data, null, 4)), (err) => {
        if (err) console.log(err)
    }
}

function readDb() {
    let dataDb = JSON.parse(fs.readFileSync('./db/db.json'))
    return dataDb
}

function verifyIfCompanyExists(companiesList, company) {
    if (companiesList.findIndex(companyName => companyName.name === company) >= 0) {
        return true
    } else {
        return false
    }
}

function listEmployess(companiesList, companyName) {
    let companyFilter = companiesList.find((cp) => cp.name === companyName)
    return companyFilter.employees
}

function verifyAdmin(companiesList, email, password) {
    let checkAdmin = companiesList.filter((obj) => {
        return obj.adminUser.email === email
    })
    if (checkAdmin.length > 0) {
        if (checkAdmin[0].adminUser.email === email && checkAdmin[0].adminUser.password === password) {
            return ({ companyDetails: checkAdmin[0], userDetails: checkAdmin[0].adminUser, userType: 'userAdmin' })
        }
    } else {
        return ({ userType: 'Not found' })
    }
}

function verifyEmployee(companiesList, email, password) {
    let checkEmployee = companiesList.filter((emp) => {
        return emp.employees.find((empFinal) => {
            return empFinal.email.includes(email)
        })
    })
    if (checkEmployee.length > 0) {
        const indexEmployee = checkEmployee[0].employees.findIndex(emp => emp.email === email)
        if (checkEmployee[0].employees[indexEmployee].email === email && checkEmployee[0].employees[indexEmployee].password === password) {
            return { companyDetails: checkEmployee[0], userDetails: checkEmployee[0].employees[indexEmployee], userType: 'userEmployee' }
        }
    } else {
        return { userType: 'Not found' }
    }
}

function verifyUser(companiesList, email, password) {

    const filterAdmin = verifyAdmin(companiesList, email, password)
    const filterEmployee = verifyEmployee(companiesList, email, password)

    if (companiesList, email === 'eriksobral@gmail.com' && password === '123') {
        return ({ userType: 'userDev' })
    } else if (filterAdmin.userType === 'userAdmin') {
        let dataReturn = verifyAdmin(companiesList, email, password)
        return ({ dataReturn, userType: 'userAdmin' })
    } else if (filterEmployee.userType === 'userEmployee') {
        let dataReturn = verifyEmployee(companiesList, email, password)
        return ({ dataReturn, userType: 'userEmployee' })
    } else {
        return ('User not found!')
    }
}

function attendanceInfo(companiesList, email, password) {
    let listAttendance = verifyEmployee(companiesList, email, password)
    return listAttendance
}

module.exports = { validateString, insertDb, readDb, verifyIfCompanyExists, verifyUser, listEmployess, attendanceInfo }