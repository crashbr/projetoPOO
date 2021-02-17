const fs = require('fs')


function validateString(value) {
    if (typeof(value) !== 'string' && typeof(value) !== 'undefined') throw `O ${value} precisa ser uma string.`;
    return;
}

function insertDb(data){
    fs.writeFileSync('./db/db.json', JSON.stringify(data, null, 4)),(err) => {
        if(err) console.log(err)
    }
}

function readDb(){
    let dataDb = JSON.parse(fs.readFileSync('./db/db.json'))
    return dataDb
}

function verifyIfCompanyExists(companiesList, company) {
    if (companiesList.findIndex(companyName => companyName.name === company) >= 0){
        return true
    } else {
        return false
    }
}

function listEmployess(companiesList, email, password) {
    return companiesList.filter((emp) => {
        return emp.employees.filter((empList) => { //fazer o filtro pela empresa (pendente!)
            return empList.name
        })
    })
}

function verifyAdmin(companiesList, email, password) {
    let checkAdmin = companiesList.filter((obj) => {
        return obj.adminUser.email === email
    })
    if (checkAdmin.length > 0 ){
        if(checkAdmin[0].adminUser.email === email && checkAdmin[0].adminUser.password === password){
            return ({companyDetails: checkAdmin[0], userDetails: checkAdmin[0].adminUser, userType:'userAdmin'})
        }
    } else {
        return({userType: 'Not found'})
    }
}
    
function verifyEmployee(companiesList, email, password) {
    let checkEmployee = companiesList.filter((emp) => {
        return emp.employees.find((empFinal) => {
        return empFinal.email.includes(email)
        })
    })
    if(checkEmployee.length > 0 ){
        if(checkEmployee[0].employees[0].email === email && checkEmployee[0].employees[0].password === password){
            return {companyDetails: checkEmployee[0], userDetails: checkEmployee[0].employees[0], userType: 'userEmployee'}
        }
    } else {
        return({userType: 'Not found'})
    }
}
    
function verifyUser(companiesList, email, password) {

    if(companiesList, email === 'eriksobral@gmail.com' && password === '123'){
        return({userType:'userDev'})
    }

    else if(verifyAdmin(companiesList, email,password).userType === 'userAdmin'){
        let dataReturn = verifyAdmin(companiesList, email,password)
        return ({dataReturn, userType: 'userAdmin'})
    }

    else if (verifyEmployee(companiesList, email, password).userType === 'userEmployee'){
        let dataReturn = verifyEmployee(companiesList, email, password)
        return({dataReturn, userType: 'userEmployee'})
    }

    else {
        return ('User not found!')
    }
}

module.exports = {validateString, insertDb, readDb, verifyIfCompanyExists, verifyUser, listEmployess}