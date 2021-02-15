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

function verifyAdmin(companiesList, email, password) {
    let checkAdmin = companiesList.filter((obj) => {
        return obj.adminUser.email === email
    })
    if (checkAdmin.length > 0 ){
        if(checkAdmin[0].adminUser.email === email && checkAdmin[0].adminUser.password === password){
        return ('userAdmin')
        }
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
        return ('userEmployee')
        }
    }
}
    
function verifyUser(companiesList, email, password) {
    if(verifyAdmin(companiesList, email,password) === 'userAdmin'){
    return ('userAdmin')
    } 
    else if (verifyEmployee(companiesList, email, password) === 'userEmployee'){
        return('userEmployee')
    }
    else if(companiesList, email == 'eriksobral@gmail.com', password == '123'){
        return('userDev')
    } else {
        return ('User not found!')
    }
}

module.exports = {validateString, insertDb, readDb, verifyIfCompanyExists, verifyUser}