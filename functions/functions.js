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


module.exports = {validateString, insertDb, readDb, verifyIfCompanyExists}